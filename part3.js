"use strict";
exports.__esModule = true;
var ToDos = /** @class */ (function () {
    function ToDos() {
        this.list = [];
    }
    ToDos.prototype.addTask = function (taskToAdd) {
        this.list.push(taskToAdd);
        console.log(taskToAdd + " has been added to the list.");
        return this.list.length;
    };
    ToDos.prototype.listAllTasks = function () {
        for (var i = 0; i < this.list.length; i++) {
            console.log(i + 1 + "). " + this.list[i]);
        }
    };
    ToDos.prototype.deleteTask = function (taskToDelete) {
        var index = this.list.indexOf(taskToDelete);
        if (index > -1) {
            this.list.splice(index, 1);
            console.log(taskToDelete + " has been deleted from the list.");
        }
        else {
            console.log("Item " + taskToDelete + " does not exist in the array.");
        }
        return this.list.length;
    };
    return ToDos;
}());
