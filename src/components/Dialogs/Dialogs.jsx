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
    let dialogs = [
        { id: 1, name: 'Hayko' },
        { id: 2, name: 'Nazar' },
        { id: 3, name: 'Myrat' },
        { id: 4, name: 'Aman' },
        { id: 5, name: 'Yura' },
        { id: 6, name: 'Valera' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'Salam' },
        { id: 1, message: 'Privet' },
        { id: 1, message: 'Hola' }
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);
       
return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
        {dialogElements}
    </div>
    <div className={s.messages}>
        {messagesElements}
    </div>
</div>
)
}

export default Dialogs;