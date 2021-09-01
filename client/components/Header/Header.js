import Image from 'next/image';
import HeaderItem from './HeaderItem';
import logoPng from "../../public/img/logo.png";

// icon imports
import{
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";



export default function Header() {
    return(
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {/* left section will have icons */}
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>

            {/* right will have logo */}
            <Image
            className="object-contain"
            src={logoPng}
            width={200}
            height={100}
            />
        </header>
    )
}
