import React from 'react'
import styled from 'styled-components'
import Icon from './icons/Icon'
import useClickOutside from 'tools/hooks/useClickOutside'

const Modal = (props) => {
    const { open, setOpen, className } = props
    const wrapperClass = open ? "modal_wrapper" : "modal_wrapper hide_wrapper"
    const coverClass = open ? 'modal_cover modal_cover-active' : 'modal_cover'
    const containerClass = open ? (
        className ? "modal_container show_modal " + className : "modal_container show_modal "
    ) : (
        'modal_container hide_modal'
    )
    
    const modalRef = React.useRef()
    useClickOutside(modalRef, () => setOpen(false))

    return (
        <React.Fragment>
            <ModalWrapper className={wrapperClass}>
                <div className={containerClass} ref={modalRef}>
                    <div className="close_modal" onClick={() => setOpen(false)}>
                        <Icon name="Cross" />
                    </div>
                    {props.children}
                </div>
            </ModalWrapper>
            <ModalCover className={coverClass} onClick={() => setOpen(false)}></ModalCover>
        </React.Fragment>
    )
}

export default Modal

const ModalWrapper = styled.div`
    position        : fixed;
    top             : 0;
    right           : 0;
    bottom          : 0;
    left            : 0;
    display         : flex;
    align-items     : center;
    padding         : 100px 0 30px;
    overflow-x      : hidden;
    overflow-y      : auto;
    visibility      : visible;
    z-index         : 100000000000;

    &.hide_wrapper {
        visibility : hidden;
    }

    .modal_container {
        margin           : auto;
        width            : 500px;
        padding          : 25px 15px;
        color            : var(--text);
        background-color : var(--body);
        border-radius    : var(--rounded-md);
        box-shadow       : var(--shadow-smooth);
        z-index          : 100000000000;
    
        h2 {
            padding-bottom : 7px;
            margin-bottom  : 10px;
            font-size      : 20px !important;
            font-weight    : 600;
    
            &.title_border {
                border-bottom : 1px solid var(--text-tertiary);
            }
        }

        .modal-title {
            font-size     : 24px;
            font-weight   : bold;
            text-align    : center;
            margin-bottom : 20px;
        }
    
        &.hide_modal {
            opacity    : 0;
            visibility : hidden;
            transform  : scale(0.8);
            transition : visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        }
    
        &.show_modal {
            opacity    : 1;
            visibility : visible;
            transform  : scale(1);
            transition : visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
        }
    
        .close_modal {
            position         : absolute;
            padding          : 5px;
            top              : 7px;
            right            : 5px;
            cursor           : pointer;
            border-radius    : 30px;
    
            svg {
                width  : 22px;
                height : 22px;
            }
    
            &:hover {
                background-color : var(--grey-xlight);
            }
        }
    }

    @media(max-width: 768px) {
        .modal_container {
            width : 85%;
        }
    }

    @media(max-width: 576px) {
        .modal_container {
            width : 95%;
        }
    }
`
const ModalCover = styled.div`
    display         : none;
    position        : fixed;
    top             : 0;
    bottom          : 0;
    left            : 0;
    right           : 0;
    background      : var(--modal-cover);
    backdrop-filter : blur(3px);
    z-index         : 100000;

    &.modal_cover-active {
        display : block;
    }
`