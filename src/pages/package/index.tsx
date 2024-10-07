import React from "react";
import Layouts from "@/layouts/Layouts";
import MyPackageNavbar from "@/views/package/MyPackageNavbar";

const PackageIndex: React.FC = () => {
    return (
        <Layouts>
            <MyPackageNavbar/>
            <div className="h-screen flex justify-center items-center">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold">Package</h1>
                </div>
            </div>
        </Layouts>
    );
};

export default PackageIndex;