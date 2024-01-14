'use client';
import React, {FormEventHandler, useState} from "react";
import {ITask} from "@/types/task";
import {MdEditNote, MdDeleteSweep} from "react-icons/md";
import Modal from "@/components/Modal";
import {addTodo, deleteTodo, editTodo} from "@/api";
import {v4 as uuidv4} from "uuid";
import {useRouter} from "next/navigation";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [taskValue, setTaskValue] = useState<string>(task.text)
    const router = useRouter();
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskValue
        })
        setOpenModalEdit(false);
        router.refresh();
    };
    const handleSubmitDelete = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDelete(false);
        router.refresh();
    };
    return (
        <tr key={task.id}>
            <td className="w-full">{task.text}</td>
            <td className="flex gap-5 ">
                <MdEditNote onClick={() => setOpenModalEdit(true)} cursor="pointer" size={20}
                            className="text-orange-500  ml-1"/>
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className="font-bold text-lg">edit the task.</h3>
                        <div className="modal-action">
                            <input
                                value={taskValue}
                                onChange={e => setTaskValue(e.target.value)}
                                type='text'
                                placeholder='add task'
                                className='input input-bordered w-full'
                            />
                            <button type="submit" className="btn btn-warning">save</button>
                        </div>
                    </form>
                </Modal>

                <MdDeleteSweep onClick={() => setOpenModalDelete(true)} cursor="pointer" size={20}
                               className="text-red-600"/>
                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                    <h3 className="font-bold text-lg">are you sure you want to delete this task?</h3>
                    <div className="modal-box">
                        id: {task.id}
                        <p>todo: {task.text}</p>
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn btn-error"
                                onClick={() => handleSubmitDelete(task.id)}>delete
                        </button>
                    </div>

                </Modal>

            </td>
        </tr>
    );
};

export default Task;