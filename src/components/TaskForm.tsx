export function TaskForm(){

    return(
        <form 
            // onSubmit={} 
            className={styles.taskForm}
        >
            <input 
                name="task"
                placeholder="Adicione uma nova tarefa" 
                type="text" 
            /> 
            <button>Criar</button>
        </form>
    );
}