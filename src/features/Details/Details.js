import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { LinkPreview } from '@dhaiwat10/react-link-preview'
import Task from '../Inbox/InboxLetter/InboxLetter'
import { setShowDetails } from './detailsSlice'


function Details({object, onSend}) {
    const dispatch = useDispatch()
    const showDetails = useSelector(state => state.details.showDetails)

    return (
        <div>
            <Modal show={showDetails.toString() == object.id?.toString()} onHide={() => dispatch(setShowDetails(''))}>
                <Modal.Header closeButton>
                    <h2>{object.type} {object.header}</h2>
                </Modal.Header>
                <Modal.Header>
                    <h4>{object.trigger?.value || object.day}</h4>
                </Modal.Header>
                <Modal.Body>
                    <h4>You start when you complete:</h4>
                    {
                        typeof object.trigger?.selectedTrigger === 'object' &&
                        Object.keys(object.trigger.selectedTrigger).length > 0 &&
                        <Task task={object.trigger.selectedTrigger} />
                    }
                    <p className="small-text"> #{object.id} </p>
                    <p className="explantion-text">
                        priority: {object.priority?.value} <br />
                        {object.priority?.info}
                    </p>
                    <p className="explanation-text">
                        easiness: {object.probability?.value} <br />
                        {object.probability?.info}
                    </p>
                    <LinkPreview url={object.coordinates?.url}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Details
