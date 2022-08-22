export const Team = (team) => {
  return (
        <div className='team'>
            <h2 >{team}</h2>
        </div>
  )
}
Team.defaultProps = {
    team: 'Nashville Grizzlies'
}

export default Team