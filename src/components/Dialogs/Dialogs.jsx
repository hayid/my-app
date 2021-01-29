import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Hayko
            </div>
                <div className={s.dialog}>
                    Nazar
            </div>
                <div className={s.dialog}>
                    Aman
            </div>
                <div className={s.dialog}>
                    Meret
            </div>
                <div className={s.dialog}>
                    Valera
            </div>
                <div className={s.dialog}>
                    Dimych
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