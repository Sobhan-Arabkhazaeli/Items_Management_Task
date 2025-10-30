import { DarkModeButton } from "../../common"
import MenuBox from "./menu-box"

const HeaderSection = () => {
  return (
    <div className="w-full h-16 flex justify-center gap-3.5 items-center ">
      <DarkModeButton/>
      <MenuBox/>
    </div>
  )
}

export default HeaderSection

