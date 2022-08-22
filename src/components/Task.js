import {FaTimes} from 'react-icons/fa'
import Team from './Team'
import AddTask from './AddTask'




const Task = ({task, onDelete, onToggle}) => {
  const month = task.day.split('').splice(5,2).join('') 
  const year = task.day.split('').splice(0,4).join('')
  const day = task.day.split('').splice(8,2).join('')
  const time = task.day.split('').splice(11,5).join('')
  return (
    <div style={{backgroundColor: Team.defaultProps.color3, transparency: 20}}className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3 style={{color: Team.defaultProps.color2}}>{task.reminder ? `${task.text} @ ${Team.defaultProps.team}` : `${Team.defaultProps.team} @ ${task.text}`} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
        onClick={() => onDelete(task.id)}/></h3>
        <p style={{color: Team.defaultProps.color2}}>{month + '/'+ day +'/'+ year + ' @ ' + time}</p>
        <p style={{color: Team.defaultProps.color2}}>{task.location}</p>
    </div>
  )
}

export default Task