var list = [];
var task = "Sweep";
function addTask(taskToAdd) {
    list.push(taskToAdd);
    console.log(taskToAdd + " has been added to the list.");
    return list.length;
}
function listAllTasks(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(i + 1 + "). " + list[i]);
    }
    //list.forEach(function(task)
    //{
    //     console.log(task);
    //})
}
function deleteTask(taskToDelete) {
    var index = list.indexOf(taskToDelete);
    if (index > -1) {
        list.splice(index, 1);
        console.log(taskToDelete + " has been deleted from the list.");
    }
    else {
        console.log("Item " + taskToDelete + " does not exist in the array.");
    }
    return list.length;
}
console.log(" ");
var numberOfTasks = addTask(task);
console.log("Number of tasks: " + numberOfTasks);
console.log(" ");
numberOfTasks = addTask("Brush teeth");
console.log("Number of tasks: " + numberOfTasks);
console.log(" ");
listAllTasks(list);
console.log(" ");
numberOfTasks = deleteTask(task);
console.log("Number of tasks: " + numberOfTasks);
console.log(" ");
