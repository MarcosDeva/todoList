import styles from './Header.module.css';
import logoTodo from '../assets/Logo.svg';

export function Header(){
    return(
        <img src={logoTodo} alt="logo Todo" />
    );
}