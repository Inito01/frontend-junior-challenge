import { toast } from "react-toastify";
import { getStatus, getError } from "features/todo/todoSlices";
import { useSelector } from "react-redux";

export const useHandleError = () => {
    const status = useSelector(getStatus);
    const error = useSelector(getError);

    const toastID = 'Wow-random-toast-id';

    const toastDisplay = (status) => {
        if (status === 'failed') {
            toast.error(error,{
                toastId: toastID,
                theme: 'colored',
                position: 'top-left',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    }

    return { status, toastDisplay }
};

