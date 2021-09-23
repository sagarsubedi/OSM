import Image from 'next/image';
import tools from "./sidebarData";
import SideBarItem from "./SidebarItem";


function Sidebar() {
    return (
        <div className="flex mt-8 ml-20">
            <div className="">
                <ul>
                    {Object.entries(tools).map(([key, {title, url, icon}]) => (
                        <SideBarItem key={key} title={title} Icon={icon} url={url}/>
                    ))}
                </ul>

            </div>

            <div>

            </div>

        </div>
    )
}

export default Sidebar;
