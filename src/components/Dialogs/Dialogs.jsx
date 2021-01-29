import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"; 


const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>    
</div>
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return ( <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="Hayko" id="1" />
            <DialogItem name="Nazar" id="2" />
            <DialogItem name="Myrat" id="3" />
            <DialogItem name="Aman" id="4" />
            <DialogItem name="Yura" id="5" />
            <DialogItem name="Valera" id="6" />
        </div>    
      
      <div className={s.messages}>
           <Message message="Hello" />
           <Message message="Hi" />
           <Message message="Salam" />
           <Message message="Privet" />
           <Message message="Hola" />
        </div>
         </div>
    )
}

export default Dialogs;