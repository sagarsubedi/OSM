import Link from 'next/link';
import { useRouter } from 'next/router';

function SidebarItem({title, Icon, url}) {

    const router = useRouter();
    
    return (
        <div>
            <li className="flex mb-8 group">
                <div className="shadow-sm p-2 mr-3 rounded-lg"><Icon className="h-8 w-9 hover:animate-bounce" /></div>
                <Link href={{
                    pathname : url,
                    query : {courseId: router.query.courseId}
                }} ><a className="self-center cursor-pointer transition duration-100 transform hover:scale-125">{title}</a></Link>
            </li>
        </div>
    )
}

export default SidebarItem;
