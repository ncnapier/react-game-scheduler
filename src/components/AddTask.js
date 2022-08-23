import {useState} from 'react'
import PropTypes from 'prop-types'
import Team from './Team'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [location, setLocation] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('please add a task')
            return
        }

        onAdd({text, day, reminder, location})

        setText('')
        setDay(Date)
        setReminder(false)
        setLocation('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label style={{color: Team.defaultProps.color3}}>Team</label>
            <input type='text' placeholder="Team Name" value={text} onChange={(e) => setText(e.target.value)} />
            
        </div>
        <div className='form-control'>
            <label style={{color: Team.defaultProps.color3}}>Day & Time</label>
            <input type='datetime-local' placeholder='Add Day & Time'value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label style={{color: Team.defaultProps.color3}}>Location</label>
            <input type='text' placeholder={reminder === true ? Team.defaultProps.gameLocation : "Address"} value={location} onChange={(e) => setLocation(e.target.value)} ></input>
            
        </div>
        <div className='form-control form-control-check'>
            <label style={{color: Team.defaultProps.color3}}>Home Game</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        
        <input type='submit' value='Save Game' className='btn btn-block' style={{backgroundColor: Team.defaultProps.color1}}/>
    </form>
  )
}

export default AddTask