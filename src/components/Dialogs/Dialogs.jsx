import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Александр" id="1" />
                <DialogItem name="Илья" id="2" />
                <DialogItem name="Антон" id="3" />
                <DialogItem name="Мария" id="4" />
                <DialogItem name="Галя" id="5" />
            </div>

            <div className={s.messages}>
                <Message message="hi" />
                <Message message="Привет демон!" />
            </div>


        </div>
    )
}

export default Dialogs;