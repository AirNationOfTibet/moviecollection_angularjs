const router = require('express').Router();
const pool = require('../modules/pool.js');

//ADD POST ROUTE

router.post('/', (req, res)=>{
    console.log('POST /add', req.body);
    const movie = req.body;
    const queryText= `INSERT INTO "movies" ("name", "genre_id", "release", "runtime") VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [movie.name, movie.genre, movie.release, movie.runtime])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error =>{
            console.log('error making query post: ', error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) =>{
    console.log('GET /add');
    pool.query(`SELECT * FROM "movies";`)
        .then(result =>{
            res.send(result.rows);
        })
        .catch(error => {
            console.log()
        })
})

router.delete('/:id', (req, res) => {
    console.log('DELETE', req.params.id);
    const movieId = req.params.id;
    pool.query('DELETE FROM "movies" WHERE "moviesid" = $1;', [movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making delete query', error);
            res.sendStatus(500);
        });
});


module.exports= router;