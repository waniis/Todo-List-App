const Router = require('@koa/router');
const { createTaskIfDoesNotExsists, getTaskById, getAllTasksByCriteria, deleteTaskItem, updateTaskItem } = require('../task/controller');
const router = new Router();

const task = "/tasks";

// racine
router.get( '/', (ctx) => {
    ctx.body = 'Welcome to our test Api ';
  });

  
//tasks  s'Route 
router.get(task, getAllTasksByCriteria); 
router.get(task+'/:id', getTaskById);
router.post(task, createTaskIfDoesNotExsists);
router.delete(task, deleteTaskItem);
router.put(task, updateTaskItem);
router.allowedMethods();



module.exports = router.routes();

