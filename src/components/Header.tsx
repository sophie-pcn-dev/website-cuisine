import styles from './Header.module.scss';
import mealink from "../assets/images/logo_mealink.png"
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from '@heroicons/react/16/solid';
import { UserCircleIcon } from '@heroicons/react/16/solid';

function Header(){
    return (
    
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
        <Bars3Icon className={`${styles.icon} mr-15`} />
            <div className = "flex-fill">
                <img src={mealink} alt="logo mealink"/>
            </div>
            <ul>
                <button className = "mr-5 btn btn-reverse-primary ">
                    <ShoppingBagIcon className={`${styles.icon}`} />
                    Réservez
                </button>
                
                <button className = "mr-5 btn btn-primary">
                    <UserCircleIcon className={`${styles.icon}`} />
                    Connexion
                </button>
            </ul>
    </header>
    );
}
 export default Header;