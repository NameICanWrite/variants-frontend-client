import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.sass'
import ComboBox from '../../Standalone components/ComboBox'
import { Combobox } from '@reach/combobox'
import { VariantClass, EventData } from './API'
import Choice from './Choice/Choice'
import { addEventData, receiveEvent, addChoice } from '../slice'


function Variant({ variant }) {
    //TODO: gather only values of class to before post (and reverse)
    //TODO: ask for choice name when adding choice
    const dispatch = useDispatch()
    //variant = useSelector(state => state.variants.variantsData[state.variants.variantsData.findIndex(item => item.id == variant.id)])

    const [folded, setFold] = React.useState(true)
    const handleChoice = (choiceName, chosenVariantName) => {
       dispatch(receiveEvent({name: variant.name, event: {choiceName, variantName: chosenVariantName}}))
    }
    const handleAddChoice = (choiceName = prompt('Give name to a choice:').toLowerCase()) => {
        dispatch(addChoice({id:variant.id, choiceName}))
    }
    return (
        <div className={`container${folded ? ' folded' : ''}`}>
            <button className="fold-unfold"
                style={folded ? { backgroundImage: 'url()' } : { backgroundImage: 'url()' }}
                onClick={() => { setFold(!folded) }}
            ></button>

            <div className='choices-container'>
                {
                    folded
                        ?
                        <>
                            <h3>{variant.name + ': ' + variant.weight}</h3>
                            {
                                variant.choices.map((choice) =>
                                    <Choice choice={choice} handle={handleChoice} type='folded' />
                                )
                            }
                        </>
                        :
                        <>
                            <div className="choice">
                                <label className='choice-name'>Variant</label>
                                <h3 className='variant-name'>{variant.name + ': ' + variant.weight}</h3>
                            </div>
                            {
                                variant.choices.map((choice) =>
                                    <Choice choice={choice} handle={handleChoice} type='unfolded' />
                                )
                            }
                        </>
                }
            </div>
            <button className="add-choice-button" onClick={() => handleAddChoice()}></button>
        </div>
    )
}

export default Variant
