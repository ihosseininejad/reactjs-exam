import { ButtonHTMLAttributes, forwardRef, FC } from 'react';
import Loader from '../common/Loader';
import '../../styles/components/form/button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick: any;
    disabled: boolean;
    loading: boolean;
    variant: 'outlined' | 'filled'
}


const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, label, disabled, loading, variant, ...props }, ref) => {

    return (
        <button ref={ref}
            onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
            className={`${variant} ${(disabled || loading) && "disabled"}`}
            {...props}>
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