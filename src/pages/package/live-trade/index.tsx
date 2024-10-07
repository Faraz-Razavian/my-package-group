import React from "react";
import Layouts from "@/layouts/Layouts";
import LiveTrade from "@/views/package/live-trade/LiveTrade";

const LiveTradeIndex: React.FC = () => {
    return (
        <Layouts>
            <LiveTrade/>
        </Layouts>
    );
};

export default LiveTradeIndex;