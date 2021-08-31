import React from 'react'
import { useDispatch } from 'react-redux'
import '../style.sass'
import {addVariantToChoice} from '../../slice'
import {Variant} from '../API'
import ComboBox from '../../../Standalone components/ComboBox'

function Choice({ choice, type = 'unfolded', handle }) {
    const dispatch = useDispatch()
    const [currentChecked, setCurrentChecked] = React.useState()
    const handleChoiceClick = (variant, index) => {
        handle(choice.name, variant.name)
        setCurrentChecked(index)
    }
    const handleAddVariant = (variantName = prompt('Give name to a variant:').toLocaleLowerCase()) => {
        const variant = new Variant().receiveName(variantName)
        dispatch(addVariantToChoice({choiceName: choice.name, variant}))
    }
    return (
        <>
            {
                type == 'unfolded' 

                &&

                <div className="choice">
                    <label className='choice-name'>{choice.name}</label>
                    {
                        choice.variants.map((variant, index) =>
                        <div className='variant-name' style={currentChecked == index ? { backgroundColor: '#66ff99' } : null}
                            onClick={() => handleChoiceClick(variant, index)}
                        >{variant.name + ': ' + variant.weight}</div>
                        )
                    }
                    <div className='add-variant-button' onClick={() => handleAddVariant()}>Add</div>
                </div>
            }
            {
                type == 'folded'

                &&

                <ComboBox
                    options={(() => choice.variants.map(variant => {
                        return {
                            title: variant.name
                        }
                    }))(choice)
                    }
                    handleValue={(variantName) => {
                        if (variantName) handle(choice.name, variantName)
                    }}
                    style={{ width: '100px', height: 30, padding: 0, marginLeft: 5, marginRight: 10 }}
                />
            }
        </>
    )
}

export default Choice
