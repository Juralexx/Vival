import React from 'react'

const CreditCard = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect fill="currentColor" opacity="0.3" x="2" y="5" width="20" height="14" rx="2" />
                <rect fill="currentColor" x="2" y="8" width="20" height="3" />
                <rect fill="currentColor" opacity="0.3" x="16" y="14" width="4" height="2" rx="1" />
            </g>
        </svg>
    )
}

export default CreditCard