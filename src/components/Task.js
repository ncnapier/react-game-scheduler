import {FaTimes} from 'react-icons/fa'
import Team from './Team'
import AddTask from './AddTask'




const Task = ({task, onDelete, onToggle}) => {
  const month = task.day.split('').splice(5,2).join('') 
  const year = task.day.split('').splice(0,4).join('')
  const day = task.day.split('').splice(8,2).join('')
  const time = task.day.split('').splice(11,5).join('')
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.reminder ? `${task.text} @ Nashville Grizzlies` : `Nashville Grizzlies @ ${task.text}`} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}/></h3>
        <p>{month + '/'+ day +'/'+ year + ' @ ' + time}</p>
        <p>{task.location}</p>
    </div>
  )
}

export default Task