
import { blue } from '@material-ui/core/colors'
import PropTypes from 'prop-types'
import Button from '../Standalone components/Button'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import {
// toggleShowAddTaskForm,
// selectShowAddTaskForm
// } from './headerSlice';

let backgroundColor

function Header({title, color}) {
    const location = useLocation()
    // const showAddTaskForm = useSelector(selectShowAddTaskForm)
    const dispatch = useDispatch() 
    
    const headingStyle = {
    color: 'black',
    backgroundColor: color,
    borderRadius: '10px',
    padding: '4px 4px',
    boxShadow: '2px 2px gray',
    }

    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {title == 'Task tracker' && location.pathname === '/' && (<Button 
            //    color={showAddTaskForm ? 'red' : 'green'} 
            //     text={showAddTaskForm ? 'Close' : 'Add'} 
            //     onClick={() => {
            //         dispatch(toggleShowAddTaskForm())
            //         } 
            //     } 
                />
            )}        
        </header>
    )
}

Header.defaultProps = {
    title: 'Poor thing'
}

Header.propTypes = {
    title: PropTypes.string
}



export default Header
