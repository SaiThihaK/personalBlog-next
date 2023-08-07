import {VscAccount} from "react-icons/vsc"
import  {BsBookmarks} from "react-icons/bs"
export default function NavbarDropdown() {
    return (
        <div>
            <div className=" ml-auto w-60 bg-white text-black rounded-lg  shadow">
                <div className="flex flex-col gap-5 p-6 border-b-2">
                    <div className="flex items-center gap-5 ">
                        <VscAccount className="w-6 h-6 "/>
                        <div>Profile</div>
                    </div>
                    <div className=" flex items-center gap-5">
                        <BsBookmarks className="w-6 h-6 "/>
                        <div>Library</div>
                    </div>
                </div>
                <div className='p-6'>
                    <div>Sing out</div>
                    <p>kaungmyat@gmail.com</p>
                </div>

            </div>
        </div>
    )
}