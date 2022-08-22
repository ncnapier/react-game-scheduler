import {useState} from 'react'

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
            <label>Team</label>
            <input type='text' placeholder="Team Name" value={text} onChange={(e) => setText(e.target.value)} />
            
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='datetime-local' placeholder='Add Day & Time'value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type='text' placeholder="Address" value={location} onChange={(e) => setLocation(e.target.value)} />
            
        </div>
        <div className='form-control form-control-check'>
            <label>Home Game</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        
        <input type='submit' value='Save Game' className='btn btn-block'/>
    </form>
  )
}

export default AddTask