const router = require('express').Router();
const logger = require('../../../utils/logger');
const controller = require('./userController');

router.param('id', controller.params);
router.route('/')
    .get(controller.get)
    .post(controller.post)
router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete)


module.exports = router;