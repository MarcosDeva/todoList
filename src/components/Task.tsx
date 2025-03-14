import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle , Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
    id: number,
    content: string
}

const ntasks : TaskType[] = [
    { id: 1 , content: 'Reunião de Alinhamento' },
    { id: 2 , content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' },
    
  ];

// export function Task({ task } : TaskType) {
export function Task() {


    // const [countTask, setCoutTask] = useState(0);
    const [tasks, setTasks] = useState(['']);
    const [newTaskText, setNewTaskText] = useState('');

    // function handleCountCreateTask(){
    
    // }

    function handleCreateNewTask( event: FormEvent){
        event.preventDefault();

        setTasks([...tasks, newTaskText]);
        setNewTaskText('');

    }

    function handleNewTaskChange( event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }
  
    function hadleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse Campo é Obrigatório');
    }

    const isNewTaskEmpty =  newTaskText.length === 0;

    return (
        <>
            <form
                onSubmit={handleCreateNewTask}
                className={styles.taskForm}
            >
                <input
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={hadleNewTaskInvalid}
                />

                <button
                    type="submit"
                    disabled={isNewTaskEmpty}
                >
                    Criar
                    <PlusCircle
                        size={16}
                        className={styles.iconPlus}
                        weight="bold" />
                </button>
            </form>

            <section>
                <div className={styles.headerTask}>

                    <div className={styles.contTaskCreate}>
                        <p>Tarefas criadas</p><span>0</span>
                    </div>

                    <div className={styles.contTaskDone}>
                        <p>Concluídas</p><span>0</span>
                    </div>

                </div>

                <div className={styles.areaTask}>
                    {ntasks.map(task => {
                        return(  
                            <div className={styles.task}>
                                <input type="checkbox" name="radio" />
                                <p key={task.id}>{task.content}</p>
                                <Trash
                                    size={17}
                                    weight="bold"
                                />
                            </div>
                        )
                    })}
                </div>

                {/* <div className={styles.areaTask}>
                    <div className={styles.task}>
                        <input type="checkbox" name="radio" />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <Trash
                            size={24}
                            weight="bold"
                        />
                    </div>
                </div> */}
            </section>

        </>
    );
}