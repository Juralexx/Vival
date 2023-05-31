import Link from "next/link";
import React from "react";

export const StyledButton = (props) => {
    const { children, className, href, icon, endIcon, ...others } = props;
    return ( 
        <button className={className ? `av-destructured-btn ${className}` : 'av-destructured-btn'} {...others}>
            {!href ? (
                <React.Fragment>
                    {icon}
                    {children}
                    {endIcon}
                </React.Fragment>
            ) : (
                <Link href={href}>
                    {icon}
                    {children}
                    {endIcon}
                </Link>
            )}
        </button>
    )
}