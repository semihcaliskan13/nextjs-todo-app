import React from "react";
import {ITask} from "@/types/task";
import Task from "@/components/Task";

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    // eslint-disable-next-line react/jsx-key
                    <Task task={task}/>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default TodoList;