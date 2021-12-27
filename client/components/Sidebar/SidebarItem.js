import Link from 'next/link';
import { useRouter } from 'next/router';

function SidebarItem({title, Icon, url}) {

    const router = useRouter();
    
    return (
        <div>
            <li className="flex mb-8 group">
                <div className="shadow-sm p-2 mr-3 rounded-lg flex gap-x-2 cursor-pointer transition duration-100 transform hover:scale-125 hover:bg-gray-700">
                    <Icon className="h-8 w-9" />
                    <Link href={{
                        pathname : url,
                        query : {courseId: router.query.courseId}
                    }} >
                        <a className="self-center">{title}</a>
                    </Link>
                </div>
            </li>
        </div>
    )
}

export default SidebarItem;
