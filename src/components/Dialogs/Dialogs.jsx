import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Hayko' },
        { id: 2, name: 'Nazar' },
        { id: 3, name: 'Myrat' },
        { id: 4, name: 'Aman' },
        { id: 5, name: 'Yura' },
        { id: 6, name: 'Valera' },
    ]
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'Salam' },
        { id: 1, message: 'Privet' },
        { id: 1, message: 'Hola' },
    ]
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>
    </div>
    )
}

export default Dialogs;