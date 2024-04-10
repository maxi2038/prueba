const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: '154.56.47.52',
  user: 'u196388150_SRT',
  password: 'o5er$1Gw%cBm345',
  database: 'u196388150_SRT'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(cors());

app.get('/movimiento/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM movimiento WHERE id_movimiento = ?`;
  connection.query(query, [id], (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
