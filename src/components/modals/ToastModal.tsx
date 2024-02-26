import { ToastProps } from '../../types/context/toastcontext.types';
import '../../styles/components/modal.scss'

const ToastModal: React.FC<ToastProps> = ({ type, title, message }) => {
    
    return (
        <>
        <div className='modal-container'>
            <div className='modal'>
                <img className='image' src={type == "success" ? "/assets/images/modal/success-loader.gif" : "/assets/images/modal/crossmark.gif"} alt="modal-animation" height={450} width={450} />
                <h3 className={`${type == "success" ? "success-text" : "error-text"} title`}>
                    {title}
                </h3>
                <p className='subtext'>
                    {message}
                </p>
            </div>
        </div>
        </>
    );
}

export default ToastModal;