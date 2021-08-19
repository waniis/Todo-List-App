const Router = require('@koa/router');
const { createTaskIfDoesNotExsistsInDb, getTaskByTitleFromDb, getTaskByIdFromDb, getAllTaskFromDb, deleteTaskItemDb, updateTaskItemDb } = require('./service');
const router = new Router();

  // setTimeOutfunction
  function setTimeoutPromise(delay) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), delay);
    });
  }

  
module.exports.getTaskByTitle = async  (ctx) => {  
  console.log(ctx.query.title);
  const task = await getTaskByTitleFromDb(ctx.query.title); 
  ctx.body = task; 
  await setTimeoutPromise(2500);
} 

module.exports.getTaskById = async  (ctx) => { 
    const task = await getTaskByIdFromDb(ctx.params.id); 
    ctx.body = task; 
    await setTimeoutPromise(2500);
    
  } 



module.exports.getAllTasksByCriteria = async (ctx ) => { 
    
  // if title exsits
     if (ctx.query.title){
    
        const task = await getTaskByTitleFromDb(ctx.query.title); 
        ctx.status =200;
        ctx.body = task; 
    }
    else {
        const tasks = await getAllTaskFromDb(); 
        ctx.status =200;
        ctx.body = tasks; 
  } 
  await setTimeoutPromise(2500);

}


  module.exports.createTaskIfDoesNotExsists = async  (ctx) =>  { 
  const task = await createTaskIfDoesNotExsistsInDb(ctx.request.body); 
  ctx.body = task; 
  await setTimeoutPromise(2500);
}



module.exports.updateTaskItem = async  (ctx) =>  { 
    const task = await updateTaskItemDb(ctx.request.body.taskid,ctx.request.body.title); 
    ctx.body = task; 
    await setTimeoutPromise(2500);
  }

  module.exports.deleteTaskItem = async  (ctx) =>  { 
    const task = await deleteTaskItemDb(ctx.request.body.taskid ,ctx.request.body.itemid); 
    ctx.body = task; 
    await setTimeoutPromise(2500);
  }