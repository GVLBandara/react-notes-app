import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote}) =>{

    const handleDelete = () => {
        handleDeleteNote(id);
    }

    return <div className="note" >
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' onClick={handleDelete}/>
        </div>
    </div>;
};

export default Note;