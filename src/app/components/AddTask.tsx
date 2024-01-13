"use client";
import React, {FormEventHandler, useState} from "react";
import {MdOutlineDownloadDone} from "react-icons/md";
import Modal from "@/app/components/Modal";


const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
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