import Layouts from "@/layouts/Layouts";
import Backtesting from "@/views/package/backtesting/Backtesting";
import React from "react";

const BacktestingIndex: React.FC = () => {
    return (
        <Layouts>
            <Backtesting/>
        </Layouts>
    );
};

export default BacktestingIndex;