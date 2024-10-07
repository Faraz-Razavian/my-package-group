import React from "react";
import Layouts from "@/layouts/Layouts";

const Home: React.FC = () => {
    return (
        <Layouts>
            <div className="h-screen flex justify-center items-center">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold">Welcome to our website!</h1>
                </div>
            </div>
        </Layouts>
    );
};

export default Home;