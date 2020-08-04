var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const userController = require('../controller/user.controller')
const jobController = require('../controller/job.controller')

router.post('/users/register', userController.register );
router.post('/users/login', userController.login );
router.get('/users/getUserById/:id', userController.getUserById );
router.get('/users/getAllUser', userController.getAllUsers );
router.put('/users/:id/update', userController.update );
router.post('/job/createjob', jobController.createjob );
router.get('/jobs/getAllJobs', jobController.getAllJobs );
router.delete('/jobs/:id/delete', jobController.deleteJob );
router.get('/jobs/getJobsById/:id', jobController.getJobById );
router.put('/jobs/:id/update', jobController.updateJobById );
module.exports = router;
