import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"; 

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                  <NavLink to="/dialogs/1">Hayko</NavLink>
            </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2">Nazar</NavLink>
            </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Aman</NavLink>
            </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Meret</NavLink>
            </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5">Valera</NavLink>
            </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/6">Dimych</NavLink>
            </div>
            </div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hello</div>
                    <div className={s.dialog}>How are you?</div>
                    <div className={s.dialog}>Whatsapp</div>
                
            </div>
        </div>
    )
}

export default Dialogs;