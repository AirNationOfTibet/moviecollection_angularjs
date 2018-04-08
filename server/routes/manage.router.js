const router = require('express').Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res)=>{
    console.log('POST /manage', req.body);
    const genre = req.body;
    const queryText= `INSERT INTO "genre" ("genre") VALUES ($1);`;
    pool.query(queryText, [genre.genre])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log('error making query post: ');
            res.sendStatus(500);
        });
});

router.get('/', (req, res) =>{
    console.log('GET /manage');
    pool.query(`SELECT * FROM genre;`)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log()
        })
})


module.exports= router;