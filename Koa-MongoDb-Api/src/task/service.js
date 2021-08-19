const Task =  require( './model'); 

module.exports.getTaskByTitleFromDb = async (title) => { 
  const data = await Task.findOne({title: title}) 
  return data; 
}; 

module.exports.getTaskByIdFromDb = async (id) => { 
    const data = await Task.findById(id) 
    return data; 
  }; 

module.exports.createTaskIfDoesNotExsistsInDb = async (task) => { 

    const data = await Task.findOne({title: task.title}) 
      if (data)
          return data; 
      else {
          var newTask = new Task (task); 
          const data =newTask.save(); 
          return data; 
      }
}

module.exports.getAllTaskFromDb = async () => { 
    const data = await Task.find({})
    return data; 
}

module.exports.updateTaskItemDb = async (taskid,item) => { 
  const data = await Task.findByIdAndUpdate(taskid, { $push: {items: {title: item }} } , { new: true} )
  return data; 
}

module.exports.deleteTaskItemDb = async (taskid,itemid) => { 
    const data = await Task.findByIdAndUpdate(taskid, { $pull: {items: {_id: itemid }} } , { new: true} )
    return data; 
}
