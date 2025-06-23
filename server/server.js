const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route API exemple
app.get('/api/hotels', (req, res) => {
  res.json([{ id: 1, name: "Hôtel Test" }]);
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));