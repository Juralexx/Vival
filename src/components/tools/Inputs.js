import { addActive } from 'functions/utils';
import React from 'react'
import styled from 'styled-components';
import useClickOutside from './hooks/useClickOutside';
import useMediaQuery from './hooks/useMediaQuery';
// import { useClickOutside } from '../hooks/useClickOutside';
import Icon from './icons/Icon';

const inputProps = (props) => {
    return ({
        className: props.inputClassName,
        type: props.type,
        id: props.id,
        name: props.name,
        placeholder: props.placeholder,
        defaultValue: props.defaultValue,
        value: props.value,
        onChange: props.onChange,
        onInput: props.onInput,
        onClick: props.onClick,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        readOnly: props.readOnly,
        disabled: props.disabled,
        min: props.min,
        max: props.max
    })
}

export const IconInput = (props) => {
    const { useRef, value, className, icon, endIcon, cross, onClean, endIconClick } = props
    return (
        <InputIcon className={`${className ? "icon-input " + className : "icon-input"}`}>
            <input
                ref={useRef}
                {...inputProps(props)}
            />
            {icon &&
                <div className="start_icon">
                    {icon}
                </div>
            }
            {cross ? (
                (value && value.length > 0) ? (
                    <div onClick={onClean} className="svg_container">
                        <Icon name="Cross" className="cross" />
                    </div>
                ) : (
                    endIcon && (
                        <div className="end_icon" onClick={endIconClick}>
                            {endIcon}
                        </div>
                    )
                )
            ) : (
                endIcon && (
                    <div className="end_icon" onClick={endIconClick}>
                        {endIcon}
                    </div>
                )
            )}
        </InputIcon>
    )
}

const InputIcon = styled.div`
    position      : relative;
    width         : 100%;
    max-width     : 350px;
    height        : 40px;
    color         : var(--input-text);
    background    : var(--input);
    border-radius : var(--rounded-sm);

    input {
        display       : block;
        width         : 100%;
        height        : 100%;
        padding       : 8px 12px 6px 20px;
        border-radius : var(--rounded-sm);
        outline       : none;
        background    : transparent;
        z-index       : 1;
        border        : none;
        color         : var(--input-text);
        border        : 1px solid var(--light-border);
        transition    : 0.3s ease-in-out;

        &:focus {
            border     : 1px solid var(--primary);
            transition : 0.3s ease-in-out;
            + .start_icon {
                svg {
                    transition : 0.3s ease-in-out;
                    color      : var(--primary);
                }
            }
            + label {
                transform  : scale(0.75);
                top        : 4px;
                transition : 0.2s ease;
                padding    : 0 0 0 64px;
            }
        }

        &::placeholder {
            color : var(--placeholder);
        }
    }

    label {
        position         : absolute;
        top              : 15px;
        color            : var(--placeholder);
        padding          : 0 0 0 50px;
        transform        : scale(1);
        transform-origin : 0;
        transition       : 0.2s ease;
        z-index          : 0;
    }

    &.is_start_icon {
        &.is_end_icon {
            input {
                padding : 8px 40px 6px;
            }
        }
    }

    &.is_start_icon {
        input {
            padding : 8px 12px 6px 40px;
        }
    }
    &.is_end_icon {
        input {
            padding : 8px 46px 6px 20px;
        }
    }

    .start_icon {
        height           : 100%;
        position         : absolute;
        bottom           : 0;
        display          : flex;
        align-items      : center;
        padding          : 0 0 0 13px;

        svg {
            height : 20px;
            width  : 20px;
            color  : var(--placeholder);
        }
    }

    .end_icon {
        position  : absolute;
        right     : 15px;
        top       : 50%;
        transform : translateY(-50%);
        z-index   : 2;
        cursor    : pointer;

        svg {
            height : 20px;
            width  : 20px;
        }
    }

    .svg_container {
        position      : absolute;
        bottom        : 7px;
        right         : 10px;
        padding       : 5px;
        border-radius : 20px;
        cursor        : pointer;
        z-index       : 700;

        svg {
            height   : 16px;
            width    : 16px;
        }

        &:hover {
            background : var(--content-light);
        }
    }
`

export const DropdownInput = (props) => {
    const { value, className, onClean, cross, icon } = props
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef()
    useClickOutside(ref, () => setOpen(false))

    const xs = useMediaQuery('(max-width: 576px)')

    return (
        <InputDropdown ref={ref} className={`${className ? 'dropdown-input ' + className : 'dropdown-input'}`} onClick={() => setOpen(!open)}>
            <input {...inputProps(props)} />
            {icon &&
                <div className="start_icon">
                    {icon}
                </div>
            }
            {cross && (
                value &&
                    value.length > 0 ? (
                    <div className="end_icon" onClick={onClean}>
                        <Icon name="Cross" />
                    </div>
                ) : (
                    <div className="end_icon" onClick={onClean}>
                        <Icon name="CaretDown" />
                    </div>
                )
            )}
            {!xs ? (
                <div className={`dropdown-input-choices ${addActive(open)}`} onClick={() => setOpen(false)}>
                    {props.children}
                </div>
            ) : (
                <div className={`mobile-menu ${addActive(open)}`}>
                    <div className="mobile-menu-tools" onClick={() => setOpen(false)}>
                        {props.children}
                    </div>
                </div>
            )}
        </InputDropdown>
    )
}

const InputDropdown = styled.div`
    position      : relative;
    height        : 40px;
    background    : var(--content);
    border        : 1px solid var(--light-border);
    border-radius : var(--rounded-sm);
    z-index       : 100;
    cursor        : pointer;

    input {
        padding            : 10px;
        color              : var(--input-text);
        background         : var(--input);
        border-radius      : var(--rounded-sm);
        outline            : none;
        cursor             : pointer;
        width              : 85%;
        height             : 100%;
        text-overflow      : ellipsis;
        overflow           : hidden;
        display            : -webkit-box;
        -webkit-line-clamp : 1;
        -webkit-box-orient : vertical;
        caret-color        : transparent;

        &::placeholder {
            color : var(--placeholder);
        }
    }

    &.is_start_icon {
        input {
            padding : 8px 12px 6px 40px;
        }
    }

    .start_icon {
        height           : 100%;
        position         : absolute;
        bottom           : 0;
        display          : flex;
        align-items      : center;
        padding          : 0 0 0 13px;

        svg {
            height : 20px;
            width  : 20px;
            color  : var(--placeholder);
        }
    }

    .end_icon {
        position      : absolute;
        right         : 6px;
        top           : 50%;
        transform     : translateY(-50%);
        padding       : 3px;
        border-radius : var(--rounded-full);
        z-index       : 2;
        cursor        : pointer;

        svg {
            height : 16px;
            width  : 16px;
        }

        &:hover {
            background-color : var(--content-light);
        }
    }

    .dropdown-input-choices {
        position         : absolute;
        left             : 0;
        width            : 100%;
        max-height       : 300px;
        overflow-y       : auto;
        margin-top       : 2px;
        background-color : var(--content);
        border-radius    : var(--rounded-sm);
        border           : 1px solid var(--light-border);
        box-shadow       : var(--shadow-bottom);
        visibility       : hidden;
        opacity          : 0;

        div {
            padding : 8px 12px;
            cursor  : pointer;
            color   : var(--text-secondary);

            &:hover {
                background-color : var(--content-light);
            }
        }
        
        &.active {
            visibility : visible;
            opacity    : 1;
        }
    }

    .mobile-menu {
        display          : none;
        position         : fixed;
        min-width        : 100%;
        top              : unset;
        transform        : none;
        bottom           : -100px;
        left             : 0;
        right            : 0 !important;
        background-color : var(--content-light);
        z-index          : 1000;
        border-radius    : var(--rounded-lg) var(--rounded-lg) 0 0;
        box-shadow       : var(--shadow-top);
        visibility       : hidden;
        opacity          : 0;
        transition       : visibility .4s, opacity .4s, bottom .4s;

        &.active {
            visibility : visible;
            opacity    : 1;
            bottom     : 0;
            transition : visibility .4s, opacity .4s, bottom .4s;
        }

        .mobile-menu-tools {
            position         : relative;
            min-width        : 100%;
            top              : unset;
            transform        : none;
            bottom           : 0;
            left             : 0;
            right            : 0 !important;
            padding          : 10px 0;
            border           : none;
            border-radius    : 8px 8px 0 0;
            background-color : var(--content);

            div,
            a {
                display       : flex;
                align-items   : center;
                min-width     : 220px;
                text-align    : left;
                padding       : 8px 20px;
                color         : var(--text);
                cursor        : pointer;

                svg {
                    height       : 16px;
                    width        : 16px;
                    margin-right : 9px;
                    color        : var(--svg-x-light);
                }

                &:hover {
                    background-color : var(--content-light);
                    svg {
                        color : var(--primary);
                    }
                }
            }
        }
    }

    @media(max-width: 576px) {
        .mobile-menu {
            display : block;
        }
    }
`