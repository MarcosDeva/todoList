import { Header } from './components/Header';
import { Task , TaskType} from './components/Task';

import styles from './App.module.css';
import './global.css';

const tasks: TaskType[] = [
  { id: 1 , content: 'Reunião de Alinhamento' },
];
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Task id="fafads"/>
        </main>
      </div>
    </div>
  )
}

export default App
