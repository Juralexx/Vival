import Icon from '../icons/Icon';
import React from 'react'

export const addClass = (state: boolean, classe: string) => {
    if (state) return classe
    else return 'un' + classe
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isError?: boolean;
    isSuccess?: boolean;
    onClean?: () => void;
}

export const InputDynamic = (props: Props) => {
    const { style, className, icon, endIcon, isError = false, isSuccess = false, onClean, onClick, ...others } = props;
    return (
        <div className={`${className ? 'av-dynamic-input ' + className : 'av-dynamic-input'}`}>
            <input {...others} />
            {props.name &&
                <label className={`${addClass(isError, 'error')} ${addClass(isSuccess, 'success')}`}>
                    {props.name}
                </label>
            }

            {(endIcon || (onClean && props.value)) &&
                <div className='end-icon' onClick={event => { onClean && onClean(); event.stopPropagation() }}>
                    {onClean && props.value ? (
                        <Icon name="Cross" />
                    ) : (
                        endIcon ? endIcon : <></>
                    )}
                </div>
            }
        </div>
    )
}

export default InputDynamic;