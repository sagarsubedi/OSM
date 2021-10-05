import Link from "next/link";

function HeaderItem({title, Icon, url}) {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20">
            <Link href={`${url}`}><Icon className="h-8 mb-1 group-hover:animate-bounce"/></Link>{/*use animate-pulse or spin or bounce or ping*/}
            <Link href={`${url}`}><p className="opacity-0 group-hover:opacity-100 ">{title}</p></Link>
        </div>
    )
}

export default HeaderItem;
