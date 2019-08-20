const HttpStatus = require('http-status-codes');
const router = require('express').Router();
const Activity = require("../schemas/activity-schema.js").schema;

router.route('/')
  .get((req, res) => {
    Activity.find({}, (error, activities) => {
      if(error){
        return handleError(res, error);
      }
      res.json(activities);
    });
  })
  .post((req, res) => {
    const activity = new Activity(req.body);

    activity.save((error) => {
      if(error){
        return handleError(res, error);
      }
      res.json(activity);
    });
});


router.route('/:id')
  .get((req, res) => {
    Activity.findById(req.params.id, (error, activity) => {
      if(error) {
        return handleError(res, error);
      }

      res.json(activity);
    });
  })
  .put((req, res) => {
    Activity.findByIdAndUpdate(req.params.id, req.body, (error) => {
      if(error) {
        return handleError(res, error);
      } 

      res.sendStatus(HttpStatus.NO_CONTENT);
    });
  })
  .delete((req, res) => {
    Activity.findByIdAndRemove(req.params.id, (error, activity) => {
      if(error) {
        return handleError(res, error);
      }

      res.sendStatus(HttpStatus.NO_CONTENT);
    });
  });

function handleError(res, error) {
  console.error(error.message);
  
  res.status(HttpStatus.INTERNAL_SERVER_ERROR)
     .json({error: error.message}); 
}

module.exports = router;
