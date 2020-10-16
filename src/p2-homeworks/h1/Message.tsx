import React from "react";
import s from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.item}>
                {props.name}
            </div>
            <div className={s.text}>
                <img src={props.avatar} alt=""/>
                <div>
                    {props.message}
                </div>
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </div>
    );
}

export default Message;
