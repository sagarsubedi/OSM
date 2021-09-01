function HeaderItem({title, Icon}) {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/> {/*use animate-pulse or spin or bounce or ping*/}
            <p className="opacity-0 group-hover:opacity-100 ">{title}</p>
        </div>
    )
}

export default HeaderItem;
