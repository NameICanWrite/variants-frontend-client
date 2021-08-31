import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { toggleShow } from './slice'

import CreateLetterForm from './CreateLetterForm/CreateLetterForm'


function CreateLetterModal() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.createLetterModal.show)
    const handleClose = () => dispatch(toggleShow())
    
    return (
        <div>
            <button type="button" 
                // onClick={handleOpen}
            >
                Open Modal
            </button>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <CreateLetterForm />
            </Modal>
        </div>
    )
}

export default CreateLetterModal
