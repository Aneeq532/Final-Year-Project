const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
});

connection.connect((err)=>{
    if (err){
        console.error('Error connection to mysql database: ' + err.stack);
        return;
    }
    console.log('connecting to mysql databse: ');

});

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.post('/Form', (req, res) => {
    const { fullName, email, faculty, department, semester, issue } = req.body;

    const sql = `INSERT INTO students (full_name, email, faculty, department, semester, your_issue) VALUES (?, ?, ?, ?, ?, ?)`;

    connection.query(sql, [fullName, email, faculty, department, semester, issue], (err, result) => {
        if (err) throw err;
        res.send('Form data submitted successfully!');
    });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});