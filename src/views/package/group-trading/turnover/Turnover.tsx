import React from "react";
import GroupTrading from "@/views/package/group-trading/GroupTrading";

const Turnover: React.FC = () => {
    return (
        <GroupTrading>
            <div className="flex justify-center items-center">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold">Turnover</h1>
                </div>
            </div>
        </GroupTrading>
    );
};

export default Turnover;
