import React from "react";
import GroupTrading from "@/views/package/group-trading/GroupTrading";
import {GroupNameColOne} from "@/views/package/group-trading/setting/GroupNameColOne";
import {GroupNameColTwo} from "@/views/package/group-trading/setting/GroupNameColTow";


const Setting: React.FC = () => {
    return (
        <GroupTrading>
            <div className="bg-white w-full">
                <div className="w-full flex justify-center h-full border-b sizeScreen gap-24">
                    <div className="w-1/2 py-8">
                        <GroupNameColOne/>
                    </div>
                    <div className="w-1/2">
                        <GroupNameColTwo/>
                    </div>

                </div>
            </div>
            <div className="h-screen">hello</div>
        </GroupTrading>
    );
};

export default Setting;