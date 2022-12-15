import Menu from "./Menu"
import ContractUser from "./ContractUser"

function Header() {
    return (
        <div className="h-[60px] flex justify-between items-center bg-[#545998] text-white">
            <Menu />
            <ContractUser />
        </div>
    )
}

export default Header