
function SidebarItem({title, Icon}) {
    return (
        <div>
            <li className="flex mb-8 group">
                <div className="shadow-sm p-2 mr-3 rounded-lg"><Icon className="h-8 w-9 hover:animate-spin" /></div>
                <button className="self-center cursor-pointer transition duration-100 transform hover:text-white hover:scale-125">{title}</button>
            </li>
        </div>
    )
}

export default SidebarItem;
