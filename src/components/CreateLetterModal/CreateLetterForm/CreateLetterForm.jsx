import './style.sass'

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Letter } from '../../../utils/Letter'

import { postLetter } from '../../../redux/letter-form.slice'

//small data to differ the letter form the other letters
import Markup from './Fields/Markup'

//logical expression which value will be deduced from response
import Expression from './Fields/Expression'

//data to be used for response creation
import SourceData from './Fields/SourceData'

//data used by computer for purposes of letter delivery
import FlightControl from './Fields/FlightControl'

export const fields = {
    Markup,
    Expression,
    SourceData,
    FlightControl
}

 
function CreateLetterForm() {
    const dispatch = useDispatch()

    const [selectedField, setSelectedField] = useState('Markup')
    const [currentLetter, setCurrentLetter] = useState(new Letter())
    const [message, setMessage] = useState()

    const tabs = [
        {
            title: 'Markup',
            handle: {
                name: function (value) {
                    currentLetter.markup.name = value
                    setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                },
            },
            Content: fields.Markup
        },
        {
            title: 'Expression',
            handle: {
                expectedType: function (value) {
                    currentLetter.expression.expectedType = value
                    setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                },
                text: function (value) {
                    currentLetter.expression.text = value
                    setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                },
            },
            Content: fields.Expression
        },
        {
            title: 'Source Data',
            handle: {
                plain: {
                    text: function (value) {
                        currentLetter.sourceData.plain.text = value
                        setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                    },
                }
            },
            Content: fields.SourceData
        },
        {
            title: 'Flight Control',
            handle: {
                time: {
                    from: function (value) {
                        //console.log(value.toString())
                        currentLetter.flightControl.time.from = value
                        //console.log(currentLetter.flightControl.time.from)
                        setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                        //console.log(currentLetter)
                    },
                    to: function (value) {
                        currentLetter.flightControl.time.to = value
                        setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                    },
                },
                notification: {
                    isDefault: function (value) {
                        currentLetter.flightControl.notification.isDefault = value
                        setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                    },
                    count: function (value) {
                        currentLetter.flightControl.notification.count = value
                        setCurrentLetter({serialize: currentLetter.serialize, ...currentLetter})
                    },
                }
            },
            Content: fields.FlightControl
        }
    ]


    return (
        <div className='create-letter-form'>
            {
                message
                    ?
                    <div>
                        <div className="message">{message}</div>
                        <button onClick={() => setMessage('')}>Ok</button>
                    </div>
                    :
                    <div>
                        <Tabs activeKey={selectedField} onSelect={(k) => setSelectedField(k)}>
                            {
                                tabs.map((tab, index) =>{
                                    return (<Tab title={tab.title} eventKey={tab.title}>
                                        <tab.Content handle={tab.handle} target={currentLetter} />
                                    </Tab>)
                                    }
                                )
                            }
                        </Tabs>

                        <button className='btn btn-block'
                            onClick={async () => {
                                await dispatch(postLetter(currentLetter.serialize())).unwrap()
                                    .then(res => setMessage(res))
                                    .catch((err) => setMessage(err.message))
                                    .finally(() => setCurrentLetter(new Letter()))
                            }}
                        >Submit</button>
                    </div>
            }


        </div>
    )
}

export default CreateLetterForm
