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
    pool.query(`SELECT "genre"."genre", "genre"."id", count ("movies"."genre_id") FROM movies RIGHT JOIN genre ON genre.id = movies.genre_id GROUP BY "genre"."genre", "genre"."id";
    `)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log()
        })
})

router.delete('/:id', (req, res) => {
    console.log('DELETE', req.params);
    const genreid = req.params.id;
    pool.query('DELETE FROM "genre" WHERE "id" = $1;', [genreid])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making delete query', error);
            res.sendStatus(500);
        });
});


module.exports= router;