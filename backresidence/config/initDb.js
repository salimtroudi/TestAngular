const db = require('./database');

async function initDatabase() {
  try {
    // Créer la base de données si elle n'existe pas
    await db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    
    // Utiliser la base de données
    await db.query(`USE ${process.env.DB_NAME}`);
    
    // Créer la table residences si elle n'existe pas
    await db.query(`
      CREATE TABLE IF NOT EXISTS residences (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Base de données initialisée avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
    throw error;
  }
}

module.exports = initDatabase; 