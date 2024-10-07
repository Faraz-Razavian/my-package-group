import React, {ReactNode} from 'react';
import Header from "./header/Header";

type LayoutsProps = {
    children: ReactNode;
};

const Layouts: React.FC<LayoutsProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
};

export default Layouts;
