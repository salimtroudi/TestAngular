const Residence = require('../models/residence');

const residenceController = {
  async getAllResidences(req, res) {
    try {
      const residences = await Residence.getAll();
      res.json(residences);
    } catch (error) {
      console.error('Erreur getAllResidences:', error);
      res.status(500).json({ 
        message: 'Erreur lors de la récupération des résidences',
        error: error.message 
      });
    }
  },

  async getResidence(req, res) {
    try {
      const residence = await Residence.getById(req.params.id);
      if (!residence) {
        return res.status(404).json({ message: 'Residence non trouvée' });
      }
      res.json(residence);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createResidence(req, res) {
    try {
      // Validation des données
      const { name, address, image, status } = req.body;
      if (!name || !address || !image || !status) {
        return res.status(400).json({ 
          message: 'Tous les champs sont obligatoires' 
        });
      }

      const result = await Residence.create(req.body);
      res.status(201).json({ 
        message: 'Résidence créée avec succès',
        data: { id: result.insertId, ...req.body }
      });
    } catch (error) {
      console.error('Erreur createResidence:', error);
      res.status(500).json({ 
        message: 'Erreur lors de la création de la résidence',
        error: error.message 
      });
    }
  },

  async updateResidence(req, res) {
    try {
      const result = await Residence.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Residence non trouvée' });
      }
      res.json({ id: req.params.id, ...req.body });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteResidence(req, res) {
    try {
      const result = await Residence.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Residence non trouvée' });
      }
      res.json({ message: 'Residence supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = residenceController; 