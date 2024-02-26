import { forwardRef, useState } from "react";
import useDidMountEffect from "../../hooks/useDidmountEffect";
import { InputProps } from "../../types/components/form/input.types";
import '../../styles/components/form/input.scss'
import { CloseEye, OpenEye } from "../../utils/iconPack";

const Input = forwardRef<HTMLInputElement, InputProps>(({ state, setState, className, type, label, required, minLength, maxLength, ...restProps }, ref) => {
    const [error, setError] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    useDidMountEffect(() => {
        if (!isValid) {
            setIsValid(true)
        } else {
            if (required && state.length <= 0) {
                setIsValid(false)
                setError(`${label} ضروری میباشد!`)
            } else if (minLength && state.length < minLength) {
                setIsValid(false)
                setError(`${label} باید حداقل ${minLength} باشد!`)
            } else {
                setIsValid(true)
                setError('')
            }
        }
    }, [state]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxLength && state.length > maxLength) return;
        setState(e.target?.value)
    }

    return (
        <>
            {
                label &&
                <label htmlFor={label} className="label">{label}</label>
            }
            <div className="field">
                <input
                    name={label}
                    type={type == 'password' && showPassword ? 'text' : type}
                    onChange={onChangeHandler}
                    value={state}
                    ref={ref}
                    className={`input ${className}`}
                    {...restProps} />

                {
                    type == 'password'
                    && <span
                        className='eye-icon'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <OpenEye /> : <CloseEye />}
                    </span>
                }

            </div>
            {!isValid && <p className="error">{error}</p>}
        </>
    );
});

export default Input;