import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Modal} from 'react-bootstrap'
import MindScrapForm from '../MindScrapForm'
import { toggleMindScrapModal } from './slice'

function MindScrapperModal() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.mindScrapModal.show)
    return (
        <div>
            <Modal show={show} onHide={() => dispatch(toggleMindScrapModal())} contentClassName='modal-90-content' dialogClassName='modal-90-dialog' centered>
                <Modal.Header>Open your mind. Litrally</Modal.Header>
                <Modal.Body>
                    <MindScrapForm />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MindScrapperModal
