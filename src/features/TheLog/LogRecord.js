import React from 'react'

// TO DO add view mode log record and hide arrow

function LogRecord({logRecord}) {
    const thisHours = `0${new Date(logRecord.date).getUTCHours()}`.slice(-2),
          thisMinutes = `0${new Date(logRecord.date).getUTCMinutes()}`.slice(-2)
    return (
        <div className='log-record'>
            {logRecord.type == 'task' && <p>Виконано завдання:</p>}
            <h3>{logRecord.header}</h3>
            <p>{logRecord.text}</p>
            <p>{logRecord.other?.trigger && `trigger:  ${logRecord.other.trigger}` }</p>
            <p className='logrecord-time'>{`${thisHours}:${thisMinutes}`}</p>
        </div>
    )
}

export default LogRecord

// {
//     "id": 1623615813055,
//     "text": "",
//     "other": {
//       "isReminder": false,
//       "trigger": "no explantion/random"
//     },
//     "date": 1623615976554
//   },
