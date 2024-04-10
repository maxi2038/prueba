const express = require('express');
const cors = require('cors');
const movimientoRoutes = require('./routes/movimientoRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use('/movimiento', movimientoRoutes);

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
