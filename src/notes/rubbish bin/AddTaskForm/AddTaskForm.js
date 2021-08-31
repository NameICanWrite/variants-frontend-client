import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { postTask } from '../../src/features/Tasks/tasksSlice'
import { useSelector, useDispatch } from 'react-redux';
import { ReactTinyLink } from 'react-tiny-link'
import { LinkPreview } from '@dhaiwat10/react-link-preview';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Button from '../../src/features/Standalone components/Button';
import Task from '../../src/features/Tasks/Task/Task';

import { toggleShowAddTaskForm, selectShowAddTaskForm } from '../../src/features/Header/headerSlice';
import { toggleSelectTriggerMode, deleteTrigger, selectTrigger } from './addTaskFormSlice';
import { StrikethroughSRounded } from '@material-ui/icons'


function AddTaskForm({ tasks, setTasks }) {
    const dispatch = useDispatch()

    const show = useSelector(selectShowAddTaskForm)
    const priorityScale = useSelector(state => state.scales.priorityScale)
    const probabilityScale = useSelector(state => state.scales.probabilityScale)
    const selectTriggerMode = useSelector(state => state.addTaskForm.selectTriggerMode)
    const selectedTrigger = useSelector(state => state.addTaskForm.selectedTrigger)

    const [header, setHeader] = useState('')
    const [trigger, setTrigger] = useState('')
    const [reminder, setReminder] = useState(false)
    const [isPreciseDate, setIsPreciseDate] = useState(false)
    const [url, setUrl] = useState('')
    const [probability, setProbability] = useState('')
    const [priority, setPriority] = useState('')
    const [dateMode, setDateMode] = useState('approximate')
    const [earliestDate, setEarliestDate] = useState()
    const [latestDate, setLatestDate] = useState()
    const [preciseDate, setPreciseDate] = useState()
    const [earliestHours, setEarliestHours] = useState()
    const [latestHours, setLatestHours] = useState()

    const earliestDateRef = React.useRef()
    const latestDateRef = React.useRef()
    const preciseDateRef = React.useRef()
    const earliestHoursRef = React.useRef()
    const latestHoursRef = React.useRef()
    const urlRef = React.useRef('')
    const priorityRef = React.useRef()
    const probabilityRef = React.useRef()
    const priorityInfoRef = React.useRef()
    const probabilityInfoRef = React.useRef()
    


    //default value for ranges
    React.useEffect(() => {
        priorityRef.current.value = '1'
    }, [])

    React.useEffect(() => {
        setPriority((priorityRef.current.max - priorityRef.current.value + 1).toString())
    }, [])



    //on Add Task button// build and send task obj
    const onSubmit = (event) => {
        event.preventDefault()

        let time
        switch (dateMode) {
            case 'approximate':
                time = {
                    type: 'approximate',
                    earliestDate,
                    latestDate
                }
                break;
        
            case 'precise':
                time = {
                    type: 'precise',
                    preciseDate,
                    earliestHours,
                    latestHours
                }
                break;
            default: break;
        }

        const newTask = {
            type: 'task',
            id: Date.now(),
            header,
            reminder,
            trigger: {
                value: trigger,
                selectedTrigger
            },
            priority: {
                value: priority,
                info: priorityInfoRef.current.value
            },
            coordinates: {
                time,
                url
            }
        }
        dispatch(postTask(newTask))
        dispatch(toggleShowAddTaskForm())
    }



    //temporary solution // CORS policy and LinkPreview conflict every few seconds
    useEffect(() => {
        setInterval(async () => {
            if (urlRef.current?.value) {
                let temp
                temp = urlRef.current.value
                urlRef.current.value = ''
                urlRef.current.value = temp
                console.log('url preview longevity effect')
            }
        }, 1000)
    }, [])



    //deletes trigger chosen from existing
    const handleDeleteTrigger = () => {
        dispatch(deleteTrigger())
    }

    return (
        <Modal show={show} onHide={() => dispatch(toggleShowAddTaskForm())} contentClassName='modal-90-content' dialogClassName='modal-90-dialog' centered>
            <Modal.Header>
                <h2>Add new task</h2>
            </Modal.Header>
            <Modal.Body>
                <form className="add-form" onSubmit={onSubmit} >

                    {/* Task */}

                    <div className="form-control">
                        <label>Task</label>
                        <input type="text" placeholder="Add Task" value={header}
                            onChange={
                                (event) => setHeader(event.currentTarget.value.toString())
                            }
                        />
                    </div>

                    {/* Trigger */}

                    <div className="form-control">
                        <label>When you start to act (trigger)</label>
                        <input type="text" placeholder="Bind the task to higher probability event" value={trigger}
                            onChange={
                                (event) => setTrigger(event.target.value)
                            }
                        />
                        {
                            Object.keys(selectedTrigger).length > 0 && <Task task={selectedTrigger} onDelete={handleDeleteTrigger} />
                        }
                        <Button text='Select already existing'
                            onClick={
                                () => {
                                    dispatch(toggleSelectTriggerMode())
                                    dispatch(toggleShowAddTaskForm())
                                }
                            }
                        />
                    </div>

                    {/* Node weight */}

                    <div className="form-control">
                        <h4>Node weight</h4>

                        <label htmlFor="">how nessesary it is for your main goal(s) (priority)</label>
                        <input type="range" max={`${priorityScale}`} min='1' step='1' 
                            onChange={(event) => setPriority((event.target.max - event.target.value + 1).toString())} 
                            ref={priorityRef} 
                        />
                        <p>{priority}</p>
                        <textarea name="" id="" cols="30" rows="1"
                            placeholder='what are your motives'
                            ref={priorityInfoRef}
                        >
                        </textarea>
                    </div>

                    {/* Space-time */}

                    <div className="form-control">
                        <h4>Space-time</h4>
                        <br />
                        <label>Time and Location you expect</label>


                        <Tabs
                            activeKey={dateMode}
                            onSelect={(k) => setDateMode(k)}
                        >
                            <Tab eventKey='approximate' title='Approximate date'>
                                <div className="form-control">
                                    <label htmlFor="">The earliest date</label>
                                    <input type="date" ref={earliestDateRef} placeholder='none'
                                        onChange={(event) => setEarliestDate(event.target.value)}
                                    />
                                    <label htmlFor="">The latest</label>
                                    <input type="date" ref={latestDateRef}
                                        onChange={(event) => setLatestDate(event.target.value)}
                                    />
                                </div>
                            </Tab>

                            <Tab eventKey='precise' title='Precise date'>
                                <div className="form-control">
                                    <label htmlFor="">Precise date</label>
                                    <input type="date" ref={preciseDateRef} placeholder='none'
                                        onChange={(event) => setPreciseDate(event.target.value)}
                                    />
                                    <label htmlFor="">Hours</label>
                                    <input type="time" ref={earliestHoursRef} 
                                        onChange={(event) => setEarliestHours(event.target.value)}
                                    />
                                    <label htmlFor="">Latest Hours</label>
                                    <input type="time" ref={latestHoursRef} 
                                        onChange={(event) => setLatestHours(event.target.value)}
                                    />
                                </div>
                            </Tab>
                        </Tabs>


                        

                        <label htmlFor="">Start location</label>
                        <input type="text" placeholder="Paste a URL to gmaps or website"
                            ref={urlRef}
                            onChange={
                                (event) => {
                                    setUrl(event.target.value)
                                    console.log(url)
                                }
                            }
                        />

                        <div className="form-controll-check" style={{}}>
                            <label>Set Reminder</label>
                            <input type="checkbox"
                                value={reminder}
                                onChange={
                                    (event) => setReminder(event.target.value)
                                }
                            />
                        </div>
                        
                        <div className="to-do">^^TO DO: CORS policy && youtube access</div>
                    </div>

                    {/* Visualisation */}

                    {url.length > 0 && <LinkPreview url={url} width='400px' />}

                    {/* Additional */}

                    <input className='btn btn-block' type="submit" value="Save Task" />
                    <div className="to-do">^^What fundamentals was used creating the task?</div>
                </form>
            </Modal.Body>

        </Modal>
    )
}

export default AddTaskForm
