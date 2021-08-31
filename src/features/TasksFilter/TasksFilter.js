import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProbability, setPriority, filterSwitch, toggleShowFilter } from './tasksFilterSlice'
import MySwitch from '../Standalone components/Switch'

function TasksFilter() {
    const dispatch = useDispatch()
    const priorityScale = useSelector(state => state.scales.priorityScale)
    const probabilityScale = useSelector(state => state.scales.probabilityScale)
    const showFilter = useSelector(state => state.tasksFilter.show)

    const [probabilityLocal, setProbabilityLocal] = React.useState()
    const [priorityLocal, setPriorityLocal] = React.useState()

    const probabilityLocalRef = React.useRef()
    const priorityLocalRef = React.useRef()

    const switchCondition = (event, conditionValue, setterFunction) => {
        event.target.checked == true ? dispatch(setterFunction(conditionValue)) : dispatch(setterFunction(''))
    }

    return (
        <>
            <button className='filter-button' onClick={() => dispatch(toggleShowFilter())}></button>
            {
                showFilter &&
                <form className='tasks-filter'>
                    <h4>Filter Tasks</h4>
                    <MySwitch onChange={() => dispatch(filterSwitch())} />
                    <fieldset>

                        <label htmlFor="">

                            <input type="number" min='1' max={`${probabilityScale}`} ref={priorityLocalRef}
                                onChange={
                                    (event) => {
                                        dispatch(setPriority(event.target.value))
                                        setPriorityLocal(event.target.value)
                                    }
                                }
                            />
                            <label htmlFor="">priority</label>
                        </label>

                        <label htmlFor="">

                            <input type="number" min='1' max={`${probabilityScale}`} ref={probabilityLocalRef}
                                onChange={
                                    (event) => {
                                        dispatch(setProbability(event.target.value))
                                        setProbabilityLocal(event.target.value)
                                    }
                                }
                            />
                            <label htmlFor="">probability</label>
                        </label>
                    </fieldset>
                </form>

            }
        </>


    )
}

export default TasksFilter

