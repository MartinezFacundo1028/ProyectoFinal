import { createContext, useContext, useState } from "react";

export const NotificationContext = createContext();

// eslint-disable-next-line react/prop-types
export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ setNotification, message, severity }}>
            {children}
            <Notification /> 
        </NotificationContext.Provider>
    );
};

const Notification = () => {
    const { message, severity } = useContext(NotificationContext);

    const background = {
        success: 'lightgreen',
        danger: 'red',
        warning: 'yellow',
        default: 'blue',
    };

    const notificationStyles = {
        position: 'absolute',
        top: '100px',
        right: '30px',
        backgroundColor: background[severity] || background.default,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    };

    if (message === '') return null;

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    );
};