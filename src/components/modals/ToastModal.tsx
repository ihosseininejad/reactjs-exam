import '../../styles/modal-container.scss'

interface ToastModalProps {
    type: string;
    title?: string;
    message?: string;
}

const ToastModal: React.FC<ToastModalProps> = ({ type, title, message }) => {
    return (
        <>
        <div className='modal-container'>
            <div className='modal'>
                <img className='image' src={type == "success" ? "/assets/images/modal/success-loader.gif" : "/assets/images/modal/crossmark.gif"} alt="" height={450} width={450} />
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