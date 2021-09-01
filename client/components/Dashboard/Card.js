import {
    AcademicCapIcon,
    HomeIcon,
    BookOpenIcon,
    UserGroupIcon,
    SpeakerphoneIcon
} from "@heroicons/react/outline";


const Style = "text-white text-xs";

const arrayIcon = [<AcademicCapIcon fontSize="small" className={Style} />, <HomeIcon fontSize="small" className={Style} />, <BookOpenIcon fontSize="small" className={Style} />, <UserGroupIcon fontSize="small" className={Style} />, <SpeakerphoneIcon fontSize="small" className={Style} />]
const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500", "from-red-600 to-red-500"]

const Card = (props) => {

    return (
        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${Color[props.icon]}`} >
            <div className="flex justify-between">
                <div></div>
                <div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                    {arrayIcon[props.icon]}
                </div>
            </div>
            <p className="text-gray-200 text-lg  ">
                {props.title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold  ">
                1 EGLD
            </p>
            <p className="text-gray-300  text-sm ">
                ${"another p"}
            </p>

        </div>
    )
}

export default Card ;
