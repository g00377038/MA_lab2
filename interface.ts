export interface tasksInterface
{
    addTask(taskToAdd: string): number;
    listAllTasks(): void;
    deleteTask(taskToDelete: string): number;
    list: Array<string>;
}