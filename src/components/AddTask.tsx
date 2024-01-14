"use client";
import React, {FormEventHandler, useState} from "react";
import {MdOutlineDownloadDone} from "react-icons/md";
import Modal from "@/components/Modal";
import {addTodo} from "@/api";
import {useRouter} from "next/navigation";
import {v4 as uuidv4} from 'uuid'



const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [taskValue, setTaskValue] = useState<string>('');

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            id: uuidv4().toString(),
            text: taskValue
        })
        setTaskValue("");
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                <MdOutlineDownloadDone size={18} className="mr-1"/>
                Add Task
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">add new task.</h3>
                    <div className="modal-action">
                        <input
                            value={taskValue}
                            onChange={e=> setTaskValue(e.target.value)}
                            type='text'
                            placeholder='add task'
                            className='input input-bordered w-full'
                        />
                        <button type="submit" className="btn btn-info">save</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};


export default AddTask;