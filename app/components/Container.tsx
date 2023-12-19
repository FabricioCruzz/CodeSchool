import React from "react";

interface ContainerProps{
    classNames?: string
    children: React.ReactNode
}

export default function Container({ classNames, children } : ContainerProps){
    return (
        <div className={classNames}>
            { children }
        </div>
    )
}