import { Outlet, NavLink } from "react-router-dom";
import cn from "classnames";

import profileIcon from '../../assets/icons/icon-profile.png';
import logo from '../../assets/logo.png';


import styles from './header.module.scss';

const links = [
    { to: "", label: "Home" },
    { to: "catalog", label: "Catalog" },
    { to: "sales", label: "Sales" },
];

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <NavLink to="/"> <img src={logo} className={styles.logo__img} alt="Profile Icon" /></NavLink>
                </div>
                <nav className={styles.navigation}>
                    {links.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                cn(styles.navigation__item, { [styles.active]: isActive })
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <NavLink to="/login"><img src={profileIcon} className={styles.navigation__iconProfile} alt="Profile Icon" /></NavLink>
                </nav>
            </header>
            <Outlet />

        </>
    )
}

export default Header
