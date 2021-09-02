import './style.sass'

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { fields } from './Fields/API'
import { Letter } from './Fields/API'

import { postLetter } from './slice'
import subscribePushNotifications from '../../../utils/subscribePushNotifications'


function CreateLetterForm() {
    const dispatch = useDispatch()

    const [submitResponse, setSubmitResponse] = useState() 
    const [selectedField, setSelectedField] = useState('Markup')
    const [currentLetter, setCurrentLetter] = useState(new Letter())

    const tabs = [
        {
            title: 'Markup',
            handle: {
                name: function (value) {
                    currentLetter.markup.name = value
                    setCurrentLetter(currentLetter)
                },
            },
            Content: fields.Markup
        },
        {
            title: 'Expression',
            handle: {
                expectedType: function (value) {
                    currentLetter.expression.expectedType = value
                    setCurrentLetter(currentLetter)
                },
                text: function (value) {
                    currentLetter.expression.text = value
                    setCurrentLetter(currentLetter)
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
                        setCurrentLetter(currentLetter)
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
                        setCurrentLetter(currentLetter)
                        //console.log(currentLetter)
                    },
                    to: function (value) {
                        currentLetter.flightControl.time.to = value
                        setCurrentLetter(currentLetter)
                    },
                },
                notification: function (value) {
                    currentLetter.flightControl.notification.isDefault = value
                    setCurrentLetter(currentLetter)
                },
            },
            Content: fields.FlightControl
        }
    ]


    return (
        <div className='create-letter-form'>
            <Tabs activeKey={selectedField} onSelect={(k) => setSelectedField(k)}>
                {
                    tabs.map((tab, index) =>
                        <Tab title={tab.title} eventKey={tab.title}>
                            <tab.Content handle={tab.handle} target={currentLetter} />
                        </Tab>
                    )
                }
            </Tabs>
            <p>{submitResponse}</p>
            <button className='btn btn-block'
                onClick={async () => {
                    setSubmitResponse(await dispatch(postLetter(currentLetter.serialize())))
                    console.log('subscribing...')
                    subscribePushNotifications(currentLetter.markup.id)
                    //console.log(currentLetter.serialize())
                }}
            >Submit</button>
        </div>
    )
}

export default CreateLetterForm
