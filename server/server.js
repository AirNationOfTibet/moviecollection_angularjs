const express = require('express');
const bodyParser = require('body-parser');
const addRouter = require('./routes/add.router.js');
const manageRouter = require('./routes/manage.router.js');

const PORT = process.env.PORT || 5002;
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/add', addRouter);
app.use('/manage', manageRouter);

app.listen(PORT, () =>{
    console.log('listening to port: ', PORT);
});