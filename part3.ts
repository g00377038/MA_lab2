import {tasksInterface} from './interface';

class ToDos implements tasksInterface
{
    list: Array<string> = [];

    addTask(taskToAdd: string): number
    { 
        this.list.push(taskToAdd);
        console.log(taskToAdd+" has been added to the list.");
        return this.list.length;
    }

    listAllTasks(): void
    { 
        for(let i: number = 0; i < this.list.length; i++)
        {
            console.log(i+1+"). "+this.list[i]);
        }
    }

    deleteTask(taskToDelete: string): number
    {    
        let index: number = this.list.indexOf(taskToDelete);
        if(index > -1)
        {
            this.list.splice(index, 1);
            console.log(taskToDelete+" has been deleted from the list.");
        }
        else
        {
            console.log("Item "+taskToDelete+" does not exist in the array.");
        }
        return this.list.length;
    }



}