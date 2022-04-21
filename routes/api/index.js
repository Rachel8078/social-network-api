const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');
const userRoutes = require('./user-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;