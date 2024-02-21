import { ButtonHTMLAttributes, forwardRef, FC } from 'react';
import Loader from '../common/Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick: any;
    disabled: boolean;
    loading: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, label, disabled, loading, ...props }, ref) => {
    return (
        <button ref={ref} onClick={disabled || loading ? (e) => e.preventDefault() : onClick} className={`submit ${(disabled || loading) && "disabled"}`} {...props}>
            <span>
                {loading
                    ? <Loader />
                    : label ? label : "بدون متن"}
            </span>
        </button>
    );
});
Button.displayName = "Button";

export default Button;