import { Header } from './components/Header';
import { Task , TaskType} from './components/Task';

import styles from './App.module.css';
import './global.css';

const tasks: TaskType[] = [
  { id: 1 , content: 'Reunião de Alinhamento' },
  { id: 2 , content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' }
  
];
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Task />
        </main>
      </div>
    </div>
  )
}

export default App
