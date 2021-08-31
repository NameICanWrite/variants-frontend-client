

import React from 'react'
import { useState, useEffect, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import { fetchInbox } from './slice';
// import TasksFilter from '../TasksFilter/TasksFilter'
import InboxLetter from './InboxLetter/InboxLetter'

function Inbox() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInbox())
      }, [dispatch])

    const inbox = useSelector(state => state.inbox.inboxData)
    // const filterOn = useSelector(state => state.tasksFilter.filterOn)
    // const priorityFilter = useSelector(state => state.tasksFilter.priority)
    // const probabilityFilter = useSelector(state => state.tasksFilter.probability)

    // const filterTask = (task) => {
    //     if (
    //             filterOn && (
    //                 (probabilityFilter && (task.probability?.value !== probabilityFilter)) ||
    //                 (priorityFilter && (task.priority?.value.toString() !== priorityFilter)) 
                    
    //             )
    //         ) {
    //             //чому одне стрінг а інше number? бо одне із них інвертували додавши 1 Жопу
    //             return false
    //         }
    //     return true
    // }

    return (
        <>
            {/* <TasksFilter /> */}
            <div className="tasks-container">
                {inbox.map(letter => {
              return  <InboxLetter key={letter.markup.id} letter={letter}/>
            })}
            </div>
            
        </>
    )
}

export default Inbox