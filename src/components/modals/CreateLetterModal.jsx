import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { toggleCreateLetterModal as toggleShow } from '../../redux/modals.slice'

import CreateLetterForm from '../CreateLetterModal/CreateLetterForm/CreateLetterForm'


function CreateLetterModal() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.modals.show)
    const handleClose = () => dispatch(toggleShow())
    
    return (
        <div>
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
