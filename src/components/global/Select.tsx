import React from 'react'
import Input from './Input'
import Icon from '../icons/Icon';
import useClickOutside from './hooks/useClickOutside';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Select = (props: Props) => {
    const { style, children, className, ...others } = props;

    const selectionRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const [open, setOpen] = React.useState<boolean>(false);
    useClickOutside(selectionRef, () => setOpen(false))

    return (
        <div ref={selectionRef} className={className ? `av-selection ${className}` : "av-selection"} onClick={() => setOpen(!open)}>
            <Input
                {...others}
                endIcon={<Icon name="CaretDown" />}
            />
            <div className={`av-selection-container ${open ? 'open' : 'closed'}`}>
                <div className='av-selection-list'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Select;