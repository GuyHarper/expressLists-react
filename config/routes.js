const router = require('express').Router();
const lists = require('../controllers/lists');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

module.exports = router;

// router.get('/lists/my-first-list', sessions.start);

router.route('/lists')
  .get(lists.index) // ok
  .post(lists.create); // ok

router.route('/lists/:id')
  .get(lists.show) // ok
  .put(lists.update) // ok
  .delete(lists.delete); // ok

// router.route('/lists/:id/share')
//   .put(lists.share);

router.route('/lists/:id/entries')
  .post(lists.entriesCreate); // ok

router.route('/lists/:id/entries/:entryId')
  .delete(lists.entriesDelete) // ok
  .put(lists.entriesUpdate); // ok

router.route('/lists/:id/entries/:entryId/comments')
  .post(lists.commentsCreate); // ok

router.route('/lists/:id/entries/:entryId/comments/:commentId')
  .delete(lists.commentsDelete); // ok

router.route('/register')
  .post(auth.register); // ok

router.route('/login')
  .post(auth.login); // ok

// router.all('/*', (req, res) => res.notFound());

module.exports = router;
