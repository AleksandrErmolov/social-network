import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css"
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.state.messagesData.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs;