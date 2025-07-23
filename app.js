const express = require('express');
const cors = require('cors');
const app = express();

const productsRouter = require('./routes/products');

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter); // ใช้ /products เป็น route หลัก

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
