import React from "react";

function ServiceIcon(res) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" {...res}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  d="M1 5h12M1 5v6.667A1.333 1.333 0 0 0 2.333 13h9.334A1.334 1.334 0 0 0 13 11.667V5M1 5l1.633-3.267A1.333 1.333 0 0 1 3.827 1h6.346a1.334 1.334 0 0 1 1.2.733L13 5M7 1v4"/>
        </svg>
    );
}

export default ServiceIcon;
