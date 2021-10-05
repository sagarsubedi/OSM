import Image from 'next/image';
import HeaderItem from './HeaderItem';
import logoPng from "../../public/img/logo.png";

// icon imports
import{
    HomeIcon,
    UserIcon,
    SearchIcon
} from "@heroicons/react/outline";

export default function Header() {
    return(
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center mr-12">
            
            <div className="flex flex-grow ml-10 max-w-xl justify-evenly">
                {/* left section will have icons */}
                {/* for now just the home icon. I don't see anything else relevant */}
                <HeaderItem title='HOME' Icon={HomeIcon} url='/' />
                <HeaderItem title='Search' Icon={SearchIcon} url='/' />  
                <HeaderItem title='LOG OUT' Icon={UserIcon} url='/' />  
                {/* log out has to be a functional click that node will wait in the backend and log user out  */}
            </div>

            {/* right will have logo */}
            <Image
            className="object-contain "
            src={logoPng}
            width={200}
            height={100}
            />
        </header>
    )
}
