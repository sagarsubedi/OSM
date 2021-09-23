import Link from 'next/link';

function SidebarItem({title, Icon, url}) {
    return (
        <div>
            <li className="flex mb-8 group">
                <div className="shadow-sm p-2 mr-3 rounded-lg"><Icon className="h-8 w-9 hover:animate-spin" /></div>
                <Link href={`${url}`} ><a className="self-center cursor-pointer transition duration-100 transform hover:text-white hover:scale-125">{title}</a></Link>
            </li>
        </div>
    )
}

export default SidebarItem;
