
import courses from "./courses";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="relative">
            <div className="flex justify-between px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(courses).map(([key, {title, url}]) => (
                    <Link href={url} key={key}><h2  className="cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500">{title}</h2></Link>
                ))}
            </div>
            {/* adad bg-gradient-to-l from-[#9e15ee] for last item fade-in effect */}
            {/* <div className="absolute top-0 right-0 h-5 w-1/12" /> */}

        </nav>
    )
}

export default Navbar;
