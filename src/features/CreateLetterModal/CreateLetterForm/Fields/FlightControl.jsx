// Vector - because letter needs :

// to know directioncoordinates where it arrives 
// (time / location for instance)

// to know "power of notification"

import React from 'react'
import { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Tooltip } from '@material-ui/core'

function FlightControl({handle, target}) {


    return (
        <div className='main-fieldset content-container' style={{ paddingLeft: 0 }}>
            <ChooseDate handle={handle.time} target={target.flightControl.time}/>
            <NotificationSettings handle={handle.notification} />
        </div>
    )
}


function NotificationSettings({handle}) {
    return (
        <div>
            <br />
            <Tooltip title='programatical pattern to get to reciever`s/human SENSORS' placement='right-start'>
                <h5 className='tip'>notification</h5>
            </Tooltip>
            <label>
                <span>** Settings **</span>
                <div className='check-group'>
                    <label className='check-label'>
                        <input type="checkbox" 
                            onChange={(e) => {
                                handle.isDefault(e.target.checked)
                            }}
                        />
                        <span>default</span>
                    </label>
                    <label className="check-label">
                        <input type="checkbox" 
                            onChange={(e) => {
                                const value = e.target.checked ? 5 : 1
                                handle.count(value)
                            }}
                        />
                        <span>send 5</span>
                    </label>
                </div>
            </label>
        </div>
    )

}

function ChooseDate({handle, target}) {
    const [isPreciseDate, setIsPreciseDate] = useState(false)
    const [dateMode, setDateMode] = useState('precise')

    let [from, setFrom] = useState()
    let [to, setTo] = useState()

    const earliestDateRef = React.useRef()
    const latestDateRef = React.useRef()
    const preciseDateRef = React.useRef()
    const earliestHoursRef = React.useRef()
    const latestHoursRef = React.useRef()

    const endOfDay = '00:00'

    const parseDate = function (previous, day, time = '') {
        const value = new Date(day)
        const hours = time.slice(0, 2) || previous?.getHours() || endOfDay.slice(0, 2)
        const minutes = time.slice(-2) || previous?.getMinutes() || endOfDay.slice(-2)
        console.log(value.toString())

        console.log(hours + ' : ' + minutes)
            
        value.setHours(hours, minutes)

        console.log(value.toString())

        return value
    }

    const formatDate = (dateObject) => {
        if (!(dateObject instanceof Date)) {
            return {
                date: 'unset',
                time: ''
            }
        }
        const daysOfWeek = [
            'Monday',
            'Tuesday', 
            'Wednesday', 
            'Thursday', 
            'Friday', 
            'Saturday', 
            'Sunday'
            ]
        const day = daysOfWeek[dateObject.getDay() - 1],
              date = `0${dateObject.getDate()}`.slice(-2),
              month = `0${dateObject.getMonth() + 1}`.slice(-2),
              year = dateObject.getFullYear(),
              minutes = `0${dateObject.getMinutes()}`.slice(-2),
              hours = `0${dateObject.getHours()}`.slice(-2)
              
        return {
            date: `${date}.${month}.${year}`,
            time: ` ${hours}:${minutes}`,
            serializedDate: `${year}.${month}.${date}`
        } 
    }

    return (
        <div className='chapter-container'>
            <Tooltip title='when MEASURMENT is conducted/ letter arrives' placement='right-start'>
                <h5 className='tip'>date</h5>
            </Tooltip>
            <div className="chapter">
                <Tabs
                    activeKey={dateMode}
                    onSelect={(k) => setDateMode(k)}
                >
                    {/* approximate */}
                    <Tab eventKey='approximate' title='Approximate date'>
                        <div className='date-container'>
                            <label className='date-label'>
                                <span>from</span>
                                <input type="date" ref={earliestDateRef} placeholder='none'
                                    onChange={(event) => {
                                        const date = parseDate(from, event.target.value, endOfDay)
                                        setFrom(date)
                                        handle.from(date)
                                    }}
                                />
                                <span>{formatDate(from).date}</span>
                            </label>

                            <label className='date-label'>
                                <span>to</span>
                                <input type="date" ref={latestDateRef}
                                    onChange={(event) => {
                                        const date = parseDate(from, event.target.value, endOfDay)
                                        setTo(date)
                                        handle.to(date)
                                    }}
                                />
                                <span>{formatDate(to).date}</span>
                            </label>
                        </div>
                    </Tab>

                    {/* precise */}
                    <Tab eventKey='precise' title='Precise date'>
                        <div className='date-container'>

                            <label className='date-label'>
                                <span>day:</span>
                                <input type="date" ref={preciseDateRef} placeholder='none'
                                    onChange={(event) => {
                                        const dateFrom = parseDate(from, event.target.value)
                                        const dateTo = parseDate(to, event.target.value)

                                        setFrom(dateFrom)
                                        setTo(dateTo)

                                        handle.from(dateFrom)
                                        handle.to(dateTo)
                                    }}
                                />
                                <span>{(formatDate(to).date == formatDate(from).date && formatDate(from).date) || 'unset'}</span>
                            </label>

                            <label className='date-label'>
                                <span>from</span>
                                <input type="time" ref={earliestHoursRef}
                                    onChange={(event) => {
                                        const day = preciseDateRef.current.value || formatDate(new Date()).serializedDate
                                        console.log(day)
                                        const date = parseDate(from, day, event.target.value)
                                        console.log(date)
                                        setFrom(date)
                                        handle.from(date)
                                    }}
                                />
                                <span>{formatDate(from).time}</span>
                            </label>

                            <label className='date-label'>
                                <span>to</span>
                                <input type="time" ref={latestHoursRef}
                                    onChange={(event) => {
                                        const day = preciseDateRef.current.value || formatDate(new Date()).serializedDate
                                        const date = parseDate(to, day, event.target.value)
                                        setTo(date)
                                        handle.to(date)
                                    }}
                                />
                                <span>{formatDate(to).time}</span>
                            </label>
                        </div>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

export default FlightControl


