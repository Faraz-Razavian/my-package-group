import React from "react";
import MyPackageNavbar from "@/views/package/MyPackageNavbar";

const LiveTrade: React.FC = () => {
    return (
        <MyPackageNavbar>
            <div className="h-screen flex justify-center items-center">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold">LiveTrade</h1>
                </div>
            </div>
        </MyPackageNavbar>
    );
};

export default LiveTrade;
