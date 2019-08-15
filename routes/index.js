const router = require('express').Router();

const activityRouter = require('./activity.js');

router.use('/activity', activityRouter);

module.exports = router;