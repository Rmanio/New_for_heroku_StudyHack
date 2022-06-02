const express = require('express');
const ShortUrl = require('../models/shortUrl')
const router = express.Router()

//URL Shortener
router.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('sources', { shortUrls: shortUrls })
})

router.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ name: req.body.wName, full: req.body.fullUrl })

    res.redirect('/sources')
})

router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})
//-------------------------------

module.exports = router;