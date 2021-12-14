const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const Axios = require('axios');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'real_estate_manage_jp'
});
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
});

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//submit form and redirect
app.post('/submitform/propertylist', (req, res) => {
    console.log(req.body)
    const private_area = req.body.private_area;
    const unit_num = req.body.unit_num;
    const unit_type = req.body.unit_type;
    const unit_situation = req.body.unit_situation;
    const lot_ownership = req.body.lot_ownership;
    const structure = req.body.structure;
    let sql = 'INSERT INTO mansion_list (private_area, unit_num, unit_type, unit_situation, lot_ownership) VALUES (?,?,?,?,?)';
    db.query(sql, [private_area, unit_num, unit_type, unit_situation, lot_ownership], (err, result) => {
        if(err) {
            throw err;
        } res.redirect('http://localhost:3000/success')

    });
    
})


//fetch data from database
app.post('/fetchyears', (req, res) => {
    let sql = 'SELECT * FROM years ORDER BY year DESC';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})

app.post('/fetchmonths', (req, res) => {
    let sql = 'SELECT * FROM months';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result)
    })
})

//fetch structure from database
app.get('/fetchstructures', (req, res) => {
    let sql = 'SELECT * FROM structures ORDER BY structure_id ASC';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result)
    })
})
