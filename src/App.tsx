import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';

export function App(){
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                
                <input type="text" /> <button>Criar</button>
                
                <span>Tarefas Criadas</span> <span>Concluidas</span> 
                tarefas -----------
            </div>
           

        </div>
       
      
    )
}