const router = require('express').Router();

const Activity = require("../schemas/activity-schema.js").schema;

router.route('/')
    .get((req, res) => {
        Activity.find({}, (error, activities) => {
            if(error){
                res.status(500).json({error: 'Hay un errror'});
                return;
            }
            res.json(activities);
        });
    })
    .post((req, res) => {
        req.body.date = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        
        const activity = new Activity(req.body);
        activity.save((error) => {
            if(error){
                res.status(500).json({error: 'Hay un errror'});
                return;
            }
            res.json(activity);
        });
    });

module.exports = router;
