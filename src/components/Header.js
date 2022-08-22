import PropTypes from 'prop-types'
import Button from './Button'
import Team from './Team'

const Header = ({title, onAdd, showAdd}) =>{

    return (
        <header className='header'>
            <img src={Team.defaultProps.logo} style={{width:50}} /><h1 style={{color: Team.defaultProps.color3}}>{title}</h1>
            <Button color={showAdd ? Team.defaultProps.color1:Team.defaultProps.color3} text={showAdd  ? 'Close' : 'Add' } onClick={onAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Schedule Games',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {

// }

export default Header