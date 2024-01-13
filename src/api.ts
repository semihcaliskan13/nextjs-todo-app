import {ITask} from "@/types/task";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> =>{

    const res = await fetch(`${baseUrl}/tasks`);
    return await res.json();
}