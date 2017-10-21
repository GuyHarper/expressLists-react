const User = require('../models/user');
// const List = require('../models/list');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res) {
  console.log('got into register controller function');
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch((err) => res.status(500).json({ message: err}));
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.unauthorized();

      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
      return res.json({ message: `Welcome back ${user.firstname}`, token });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

// function guestAccess(req, res) {
//   if(!req.session.listId) {
//     List
//       .create({
//         name: '',
//         entries: []
//       })
//       .then(list => {
//         req.session.listId = list.id;
//         res.json(list);
//       })
//       .catch(() => res.status(500).json({ message: 'Something went wrong'}));
//   }
// }

module.exports = {
  register,
  login/*,*/
  // guestAccess
};
