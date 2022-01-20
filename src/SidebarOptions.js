import React from 'react'
import'./Sidebaroptions.css';


function SidebarOptions({active ,text ,Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active' }`}>
            <Icon />
            <h4>{text}</h4>
        </div>
    )
}

export default SidebarOptions;
