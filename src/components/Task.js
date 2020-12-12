const Task = props => {
    return (
        <>
            <div style={{
                display: 'flex',
                'justify-content': 'space-between'
            }}>
                <a href={'#'}>
                    {props.task.title}
                </a>
                <span>
                    {props.task.type}
                </span>
            </div>

            <div style={{
                display: 'flex',
                'flex-direction': 'column'
            }}>
                <span>{props.task.difficulty}</span>
                {props.task.deadline && <span>{props.task.deadline}</span>}
                {props.task.subtasksCount && <span>Number of subtasks: {props.task.subtasksCount}</span>}
            </div>
        </>
    )
}

export default Task