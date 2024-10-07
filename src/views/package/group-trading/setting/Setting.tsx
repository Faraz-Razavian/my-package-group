import React from "react";
import GroupTrading from "@/views/package/group-trading/GroupTrading";
import {GroupNameColOne} from "@/views/package/group-trading/setting/groupName/GroupNameColOne";
import {GroupNameColTwo} from "@/views/package/group-trading/setting/groupName/GroupNameColTow";
import {Invitation} from "@/views/package/group-trading/setting/Invitation";
import {MyPartnerList} from "@/views/package/group-trading/setting/MyPartnerList";
import {Button} from "@/components/ui/button";


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
            <Invitation/>
            <MyPartnerList/>
        </GroupTrading>
    );
};

export default Setting;