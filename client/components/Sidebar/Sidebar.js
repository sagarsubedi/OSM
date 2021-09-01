import Image from 'next/image';
import userAvatar from "../../public/img/headshot.jpg";
import {
    AcademicCapIcon,
    HomeIcon,
    BookOpenIcon,
    UserGroupIcon,
    SpeakerphoneIcon,
    FolderOpenIcon

} from "@heroicons/react/outline";
function Sidebar() {
    return (
        <div className="flex mt-8 ml-20">
            <div className="p-0 w-64 border-r hidden md:block border-gray-200">
                <h6 className="font-bold mb-4">Sagar Subedi</h6>
                <ul>
                    <li className="flex mb-8 group">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><HomeIcon className="h-8 w-9 group-hover:animate-spin" /></div>
                        <span className="self-center cursor-pointer transition duration-100 transform hover:text-white hover:scale-125">Home</span>
                    </li>
                    <li className="flex mb-8">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><AcademicCapIcon className="h-8 w-9 hover:animate-spin" /></div>
                        <span className="self-center">Assignments</span>
                    </li>
                    <li className="flex mb-8">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><BookOpenIcon className="h-8 w-9 hover:animate-spin" /></div>
                        <span className="self-center">Tests and Quizzes</span>
                    </li>
                    <li className="flex mb-8">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><FolderOpenIcon className="h-8 w-9 hover:animate-spin" /></div>
                        <span className="self-center">Resources</span>
                    </li>
                </ul>

                <h6 className="font-bold mb-4">More Tools</h6>
                <ul>
                <li className="flex mb-8">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><SpeakerphoneIcon className="h-8 w-9 hover:animate-spin" /></div>
                        <span className="self-center">Announcements</span>
                    </li>
                    <li className="flex mb-8">
                        <div className="shadow-sm p-2 mr-3 rounded-lg"><UserGroupIcon className="h-8 w-9 hover:animate-spin" /></div>
                        <span className="self-center">Roster</span>
                    </li>
                </ul>

            </div>

            <div>

            </div>

        </div>
    )
}

export default Sidebar;
