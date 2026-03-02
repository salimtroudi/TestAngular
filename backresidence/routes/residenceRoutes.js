const express = require('express');
const router = express.Router();
const residenceController = require('../controllers/residenceController');

router.get('/', residenceController.getAllResidences);
router.get('/:id', residenceController.getResidence);
router.post('/', residenceController.createResidence);
router.put('/:id', residenceController.updateResidence);
router.delete('/:id', residenceController.deleteResidence);

module.exports = router; 