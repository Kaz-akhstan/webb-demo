const { response } = require('express');
const express = require('express');
const pool = require('../utils/database');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try {
        const [rows] = await pool
        .promise()
        .query(`SELECT * from demo`);
    
        console.log(rows);

        res.render('index.njk', {
            title: 'Kursdemo',
            intro: 'En demosida för att ge ett litet smakprov på tekniken och vad den kan göra.',
            rows: rows
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/test', function(request, response, next)
{
response.render('test.njk', {
    title: 'Testsida',
    intro: 'Sida för testande'
});
});

router.get('/images', function(request, response, next)
{
    response.render('images.njk', {
        title: 'Bilder',
        intro: 'Här finns det bilder'
    });
});

module.exports = router;