import { forwardRef, HTMLProps, useState } from "react";
import useDidMountEffect from "../../hooks/useDidmountEffect";

interface InputProps extends HTMLProps<HTMLInputElement> {
    state: any;
    setState: React.Dispatch<React.SetStateAction<any>>;
    label?: string;
    required: boolean;
    minLength?: number;
    maxLength?: number
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ state, setState, className, type, label, required, minLength, maxLength, ...props }, ref) => {
    const [error, setError] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)  

    useDidMountEffect(() => {
        if(!isValid){
            setIsValid(true)
        } else {
            if (required && state.length <= 0) {
                setIsValid(false)
                setError(`${label} ضروری میباشد!`)
            } else if(minLength && state.length <= minLength){
                setIsValid(false)
                setError(`${label} باید حداقل ${minLength} باشد!`)
            } else {
                setIsValid(true)
                setError('')
            }
        }
    }, [state]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(maxLength && state.length >= maxLength) return;

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
                    type={type}
                    onChange={onChangeHandler}
                    value={state}
                    ref={ref}
                    className={`input ${className}`}
                    {...props} />
            </div>
            {!isValid && <div className="error">{error}</div>}
        </>
    );
});
Input.displayName = "Input";

export { Input };