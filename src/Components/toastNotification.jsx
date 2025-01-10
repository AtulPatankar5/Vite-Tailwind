import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";
import { clearNotification } from "../Store/notificationSlice";
import 'react-toastify/dist/ReactToastify.css'

const NotificationListener = () => {
    const { type, message } = useSelector((state) => state.notifications);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (message) {
            switch (type) {
                case "success":
                    toast.success(message);
                    break;
                case "error":
                    toast.error(message);
                    break;
                case "info":
                    toast.info(message);
                    break;
                case "warning":
                    toast.warning(message);
                    break;
                default:
                    toast(message);
            }
            dispatch(clearNotification());
        }
    }, [type, message, dispatch]);

    return <ToastContainer
        autoClose={1000}
        hideProgressBar
        theme="colored"
    // transition={Slide}
    />;
};

export default NotificationListener;
