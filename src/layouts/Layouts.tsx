import React from 'react';
import Header from "./header/Header";

const Layouts = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default Layouts;
