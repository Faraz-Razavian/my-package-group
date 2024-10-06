import {Button} from "@/components/ui/button";
import React from "react";
import Navbar from "@/views/package/Navbar";

const Package: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">Welcome to our website!</h1>
            </div>
            <Button className="!bg-red-500 w-1/2">hellofdsgdg</Button>
        </>
    );
};

export default Package;
