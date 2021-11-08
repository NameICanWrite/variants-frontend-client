// Vector - because letter needs :

// to know directioncoordinates where it arrives 
// (time / location for instance)

// to know "power of notification"

import React, { useEffect } from 'react'
import { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Tooltip } from '@material-ui/core'
import { endOfDay, formatDate, modifyDate, startOfDay } from '../../../../utils/date.utils'

function FlightControl({ handle, target }) {

    return (
        <div className='main-fieldset content-container' style={{ paddingLeft: 0 }}>
            <ChooseTime handle={handle.time} target={target.flightControl.time} />
            <NotificationSettings handle={handle.notification} />
        </div>
    )
}


function NotificationSettings({ handle }) {
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

function ChooseTime({ handle, target: {to, from} }) {
    const [dateMode, setDateMode] = useState('precise')

    //set default arrival interval
    useEffect(() => {
        let to = new Date(),
        from = new Date()

        from.setHours(startOfDay.slice(0, 2), startOfDay.slice(-2))
        to.setHours(endOfDay.slice(0, 2), endOfDay.slice(-2))

        handle.from(from)
        handle.to(to)
    }, [dateMode])


    useEffect(() => console.log(to + ' ' + from), [to, from])
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
                                <input type="date" placeholder='none'
                                    onChange={(event) => {
                                        const day = event.target.value
                                        const date = modifyDate(from, day, startOfDay)

                                        handle.from(date)
                                    }}
                                />
                                <span>{formatDate(from).date}</span>
                            </label>

                            <label className='date-label'>
                                <span>to</span>
                                <input type="date"
                                    onChange={(event) => {
                                        const day = event.target.value
                                        const date = modifyDate(from, day, endOfDay)
                                        
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
                                <input type="date" placeholder='none'
                                    onChange={(event) => {
                                        const day = event.target.value
                                        const dateFrom = modifyDate(from, day)
                                        const dateTo = modifyDate(to, day)

                                        handle.from(dateFrom)
                                        handle.to(dateTo)
                                    }}
                                />
                                <span>{(formatDate(to).date == formatDate(from).date && formatDate(from).date) || 'unset'}</span>
                            </label>

                            <label className='date-label'>
                                <span>from</span>
                                <input type="time"
                                    onChange={(event) => {
                                        const day = formatDate(from).serializedDate
                                        const time = event.target.value
                                        const date = modifyDate(from, day, time)

                                        handle.from(date)
                                    }}
                                />
                                <span>{formatDate(from).time}</span>
                            </label>

                            <label className='date-label'>
                                <span>to</span>
                                <input type="time"
                                    onChange={(event) => {
                                        const day = formatDate(to).serializedDate
                                        const time = event.target.value
                                        const date = modifyDate(to, day, time)

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


