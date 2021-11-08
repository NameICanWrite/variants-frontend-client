import '../style.sass'
import React from 'react'
import { useState } from 'react'

import { Tooltip } from '@material-ui/core'

import Tabs from '../../../reusables/Tabs/Tabs'

function Expression({ handle }) {

    const types = ['bool', 'number', 'string', 'object', 'neural', 'encoded']
    const [textareaValue, setTextareaValue] = useState()
    const [selectedType, setSelectedType] = useState()
    

    const textareaRef = React.createRef()

    const changeTextareaSize = async () => {
        textareaRef.current.style.height = 'inherit';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }

    const ChooseType = function () {
        
        return (
            <div>
                <label>
                    <Tooltip title='used by system to create SENSOR' placement='right-start'>
                        <span className='tip'>type</span>
                    </Tooltip>
                    <div className="check-group" style={{ marginTop: 0 }}>
                        {
                            types.map(type =>
                                <label className='check-label'>
                                    <input type="checkbox" checked={type == selectedType} onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedType(type)
                                            handle.expectedType(type)
                                        }
                                    }} />
                                    <span>{type}</span>
                                </label>
                            )
                        }
                    </div>
                </label>
            </div>
        )
    }

    const tabs =
        [
            {
                title: 'Text',
                Content: function () {
                    
                    return (
                        <div className='content-container'>
                            <label>
                                <span>Шуканий вираз</span>
                                <textarea className='textarea' cols="25" rows="2" ref={textareaRef}
                                    onChange={(e) => {
                                        changeTextareaSize(e)
                                        setTextareaValue(e.target.value)
                                        handle.text(e.target.value)
                                    }}
                                    value={textareaValue}
                                ></textarea>
                            </label>
                            <ChooseType />
                        </div>
                    )
                }
            },
            {
                title: 'Neural',
                Content: function () {
                    return (
                        <div className='content-container'>
                            <h1>Do stuff</h1>
                            <ChooseType />
                        </div>
                    )
                }
            }
        ]
    return (
        <div>
            <fieldset className='main-fieldset'>
                <Tabs tabs={tabs} />
            </fieldset>
        </div>
    )
}

export default Expression
