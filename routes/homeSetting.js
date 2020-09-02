const express = require('express');
const router = express.Router();
const homeSettings = require('../services/homeSetting')
router.post('/homeSetting', async (req, res) => {
    const homeSetting = await homeSettings.addHomeSetting(req.body.homeSetting)
    if (homeSetting) {
        res.status(200).json(homeSetting);
    } else {
        res.status(500).send('error')
    }
    
});
router.get('/homeSetting', async (req, res) => {
    const homeSetting = await homeSettings.getHomeSettings();
    if (homeSetting) {
        res.status(200).json(homeSetting);
    } else {
        res.status(500).send('error')
    }
    
});
router.get('/homeSettingAdmin', async (req, res) => {
    const homeSetting = await homeSettings.getHomeSettingsAdmin();
    if (homeSetting) {
        res.status(200).json(homeSetting);
    } else {
        res.status(500).send('error')
    }
    
});
router.post('/deleteHomeSetting', async (req, res) => {
    console.log(req.body.id)
    const db = await homeSettings.deleteHomeSetting(req.body.id)
    if (db) {
        res.status(200).json(db);
    } else {
        res.status(500).send('error')
    }
});

module.exports = router;