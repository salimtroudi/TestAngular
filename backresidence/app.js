const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const initDatabase = require("./config/initDb");
const residenceRoutes = require("./routes/residenceRoutes");

const app = express();

// Configuration CORS plus permissive pour le développement
const corsOptions = {
  origin: "*", // Attention: à modifier en production
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware pour parser le JSON avec une limite augmentée
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Middleware pour logger les requêtes en développement
if (config.server.nodeEnv === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// Routes
app.use("/residences", residenceRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Route non trouvée" });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Une erreur est survenue sur le serveur",
    error: config.server.nodeEnv === "development" ? err.message : {},
  });
});

// Initialiser la base de données avant de démarrer le serveur
initDatabase()
  .then(() => {
    const PORT = config.server.port;
    app.listen(PORT, () => {
      console.log(
        `Serveur démarré sur le port ${PORT} en mode ${config.server.nodeEnv}`,
      );
      console.log(`API accessible à http://localhost:${PORT}/residences`);
    });
  })
  .catch((error) => {
    console.error("Impossible de démarrer l'application:", error);
    process.exit(1);
  });
