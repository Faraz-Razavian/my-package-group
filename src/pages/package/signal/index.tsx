import Layouts from "@/layouts/Layouts";
import MyPackageNavbar from "@/views/package/MyPackageNavbar";
import Signal from "@/views/package/signal/Signal";

export default function SignalIndex() {
    return (
        <Layouts>
            <MyPackageNavbar>
                <Signal/>
            </MyPackageNavbar>
        </Layouts>
    )
}
