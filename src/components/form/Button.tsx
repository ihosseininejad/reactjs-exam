import { forwardRef, FC } from 'react';
import Loader from '../common/Loader';
import { ButtonProps } from '../../types/components/form/button.types';
import '../../styles/components/form/button.scss'

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, label, disabled, loading, variant, ...restProps }, ref) => {

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) {
            e.preventDefault()
            return;
        }
        onClick(e);
    }

    return (
        <button
            ref={ref}
            onClick={onClickHandler}
            className={`${variant} ${(disabled || loading) && "disabled"}`}
            {...restProps}
        >
            <span>
                {
                    loading
                        ? <Loader />
                        : label ? label : "بدون متن"
                }
            </span>
        </button>
    );
});

export default Button;