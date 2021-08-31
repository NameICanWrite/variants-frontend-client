import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FaTimes } from 'react-icons/fa'

import { fetchLog, postLogRecord } from '../../TheLog/logSlice'

import TextareaForm from '../../Standalone components/TextareaForm'
import Details from '../../Details/Details'

import { setShowDetails } from '../../Details/detailsSlice'
import { answerLetter } from './API'
import { fetchInbox } from '../slice'

function InboxLetter({ letter}) {

    function Keyboard() {
        const dispatch = useDispatch()
        function handleClick(e) {
            answerLetter(letter.markup.id, e.target.value)
        }
        switch(letter.expression.expectedType) {
            case 'bool': return (
                <div className='letter-keyboard'>
                    <button onClick={handleClick} value='true'>Так</button>
                    <button onClick={handleClick} value='false'>Ні</button>
                </div>
            )
            default: return (
                <div className='letter-keyboard'>
                    <button onClick={handleClick} value='default'>Read</button>
                </div>
            )
        }
    }
    
    return (
        <div>
            <h3>{letter.markup.name}</h3>
            <p>Analyze: {letter.sourceData.text}</p>
            <p>Expression: {letter.expression.text}</p>
            <Keyboard />
        </div>
    )
}

export default InboxLetter
