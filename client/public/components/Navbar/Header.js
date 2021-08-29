import classes from "./Header.module.scss";
import Link from 'next/link';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

export default function Header() {
    return(
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>Navbar</h2>

                <nav className={classes.header__content__nav}>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/"><a>Home</a></Link></li>
                    </ul>
                    <button>Login</button>
                </nav>

                <div className={classes.header__content__toggle}>
                    <BiMenuAltRight />
                </div>
            </div>

        </header>
    )
}
