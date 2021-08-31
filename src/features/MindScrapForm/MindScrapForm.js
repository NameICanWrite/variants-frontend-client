import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Modal} from 'react-bootstrap'
import Variant from '../Variants/Variant/Variant'
import Variants from '../Variants/Variants'
import './style.sass'
import {createAllEventsData, fetchVariants, postEvents} from '../Variants/slice'
import { toggleMindScrapModal } from './MindScrapModal/slice'

function MindScrapForm() {

    const dispatch = useDispatch()
    const eventsData = useSelector(state => state.variants.eventsData)
    const variantsData = useSelector(state => state.variants.variantsData)

    return (
        <div className="this-container">
            <Variants />
            <input className='btn btn-block' type="submit" value="Save Events" onClick={() => {
                dispatch(postEvents(eventsData))
                dispatch(toggleMindScrapModal())
            }}/>
            <div className="to-do">div - form, prevent default for button</div>
        </div>

    )
}

export default MindScrapForm
