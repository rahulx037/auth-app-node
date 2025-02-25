const express = require('express');
const postsController = require('../controllers/taskController');
const { verifyToken } = require('../middlewares/tokenVerifier');

const router = express.Router();

router.get('/all-tasks', postsController.getTasks);
router.get('/single-task', postsController.singleTask);
router.post('/create-task', verifyToken, postsController.createTask);

router.put('/update-task', verifyToken, postsController.updateTask);
router.delete('/delete-task', verifyToken, postsController.deleteTask);

module.exports = router;