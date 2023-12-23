import Link from "next/link";
import logoImage from "@/assets/logo.png"
import classes from "./main-header.module.css";
export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img src={logoImage.src} alt="A plate with food on it"/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Links</Link>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
