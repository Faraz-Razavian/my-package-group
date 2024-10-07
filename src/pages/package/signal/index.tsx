import React from "react";
import Layouts from "@/layouts/Layouts";
import MyPackageNavbar from "@/views/package/MyPackageNavbar";
import Signal from "@/views/package/signal/Signal";

const SignalIndex: React.FC = () => {
    return (
        <Layouts>
            <MyPackageNavbar>
                <Signal/>
            </MyPackageNavbar>
        </Layouts>
    );
};

export default SignalIndex;