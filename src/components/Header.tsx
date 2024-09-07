import logoTodo from '../assets/logoTodo.svg';
import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.header}>   
            <img src={ logoTodo } alt="" />
        </header>
    )
}