const router = require('express').Router();


// get all posts for homepage
router.get('/', async (req, res) => {
    res.render('all-listings', {loggedIn: req.session.loggedIn})
  })

// login page
router.get('/login', async (req, res) => {
  res.render('login')
})

module.exports = router;