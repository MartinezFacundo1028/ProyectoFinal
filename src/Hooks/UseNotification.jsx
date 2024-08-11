import { useContext } from "react";
import { NotificationContext } from "../ContextNotification/ContextNotification";


export const useNotification = () => {
    return useContext(NotificationContext);
};