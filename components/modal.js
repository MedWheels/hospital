import { useState, useEffect } from "react";
import  ReactDOM  from 'react-dom';
import styles from "../styles/Modal.module.css";
export default function Modal({show, onClose, children})
{
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        setIsBrowser(true);
    },
    []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick={handleClose}>
                    ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT<br></br>
                    <div className={styles.body}>{children}</div>
                    <div className="place-content-center">
                    <button className="text-center p-2 rounded-md text-orange-500 border-orange-400  mt-3  border-2">Close</button>
                    </div> 
                    </a>

                </div>
              
            </div>
        </div>
    ) : null;

    if(isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
        ;
    }
    else{
        return null;  
    }
}  