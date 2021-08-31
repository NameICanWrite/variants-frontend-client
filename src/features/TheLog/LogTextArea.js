import React from 'react'
import {postLogRecord} from './logSlice'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import TextareaForm from '../Standalone components/TextareaForm'

function LogTextArea() {
    
    const dispatch = useDispatch()

    //sends textarea to log
    const onSend = async (textareaValue, header = '') => {
        const currentLogRecord = {
            type: 'text record',
            id: Date.now(),
            header,
            text: textareaValue,
            date: Date.now()
        }
        console.log(currentLogRecord)
       await dispatch(postLogRecord(currentLogRecord))
    }

    return (
        <TextareaForm onSend={onSend} autosaveAdress={'log-textarea'}/>
    )
}

export default LogTextArea
