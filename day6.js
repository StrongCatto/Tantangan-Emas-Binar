const express = require('express');
const app = express();
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');
const PORT = 3000;

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
}

app.set('view engine', 'ejs');

// application level middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:name', (req, res) => {
  res.render('index', { name: req.params.name });
})

// grouping routes
app.use('/user', userRoutes);
app.use('/product', productRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
})