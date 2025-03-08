import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle , Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
    id: number,
    content: string
}

export function Task({ task } : TaskType) {

    // const [countTask, setCoutTask] = useState(0);
    const [tasks, setTasks] = useState(['']);
    const [newTaskText, setNewTaskText] = useState('');

    function handleCountCreateTask(){
    
    }

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
                {/* https://scontent.fvcp3-1.fna.fbcdn.net/v/t39.30808-6/245932367_1245695815842644_2112921870281147131_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeET6rpDzsPxOf9G12Cy20TUCcgZvssOpMwJyBm-yw6kzDRmeJR1exw1sxm72QfxWqMcAXunJ63JucfBDJ28oReZ&_nc_ohc=bJc3ZGtLnpUQ7kNvgEiYhP5&_nc_oc=AdiBWiJIvr7OpRKCKaehTQRz9f1cyuYzczjrj2ZuLtOvxqhb8xwKGWWSbHyqMOVTpeCJxEDDfNS86iNCtvSW94Cu&_nc_zt=23&_nc_ht=scontent.fvcp3-1.fna&_nc_gid=A-87pJozd5RLQB1l04VtFi5&oh=00_AYAxFLKH2jjsyBYbNNk1vmuApZ_BVi6NBjAfwn6XlC8_0Q&oe=67B2E853 */}
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
                    {tasks.map(task => {
                        return(  
                            <div className={styles.task}>
                                <input type="checkbox" name="radio" />
                                <p key={task}>{task}</p>
                                <Trash
                                    size={24}
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