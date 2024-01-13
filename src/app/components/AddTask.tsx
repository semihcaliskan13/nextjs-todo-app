import React from "react";
import { MdOutlineDownloadDone } from "react-icons/md";

const AddTask = () => {
    return(
        <div>
            <button className="btn btn-primary w-full">
                <MdOutlineDownloadDone size={18} className="mr-1" />
                Add Task
            </button>
        </div>
    )
};


export default AddTask;