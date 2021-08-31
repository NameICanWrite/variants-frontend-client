import React from 'react'
import {useSelector} from 'react-redux'
import LogRecord from './LogRecord'
import LogTextArea from './LogTextArea';

function Log() {
    const log = useSelector((state) => state.log.logData)
    const monthNames =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className='log-container'>
            {
                log.slice(0).reverse().map((logRecord, index, log) => {
                    const thisDate = new Date(log[index].date).getUTCDate(),
                         todayDate = new Date(Date.now()).getUTCDate(),
                         nextDate = new Date(log[index - 1]?.date).getUTCDate() || todayDate,
                         thisMonth = new Date(log[index].date).getUTCMonth(),
                         todayMonth = new Date(Date.now()).getUTCMonth(),
                         nextMonth = new Date(log[index - 1]?.date).getUTCMonth() || todayMonth
                    return (
                        <div>
                            <LogRecord logRecord={logRecord} key={logRecord.id}/> 
                            {
                                (nextDate > thisDate || nextMonth > thisMonth) && 
                                    <div className ='log-datelabel'>
                                        {`${monthNames[nextMonth + 1]} ${`0${nextDate}`.slice(-2)}`} 
                                    </div>  
                            }
                        </div>     
                    )
                })
            }
        </div>
    )
}

export default Log
