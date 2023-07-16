import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp } from 'firebase/firestore';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const [elapsedTime, setElapsedTime] = useState('');

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);

    useEffect(() => {
        const interval = setInterval(() => {
            const messageTimestamp = message.date;
            const currentTimestamp = Timestamp.now();
            const timeDiff = currentTimestamp.toMillis() - messageTimestamp.toMillis();
            const seconds = Math.floor(timeDiff / 1000);

            if (seconds < 60) {
                setElapsedTime('just now');
            } else if (seconds < 3600) {
                const minutes = Math.floor(seconds / 60);
                setElapsedTime(`${minutes}m ago`);
            } else if (seconds < 86400) {
                const hours = Math.floor(seconds / 3600);
                setElapsedTime(`${hours}h ago`);
            } else {
                const days = Math.floor(seconds / 86400);
                setElapsedTime(`${days}d ago`);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [message]);

    return (
        <div
            ref={ref}
            className={`message ${message.senderId === currentUser.uid && 'owner'}`}
        >
            <div className="messageInfo">
                <img
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>{elapsedTime}</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;
