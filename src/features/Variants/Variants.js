import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
//* однойменну функцію-конструктор Variant декларуємо як VariantFunction
import VariantFunction from './Variant/Variant'
import { Variant } from './Variant/API'
import { fetchVariants, addVariant } from './slice'

function Variants() {
    const dispatch = useDispatch()
    const variants = useSelector(state => state.variants.variantsData)

    React.useEffect(() => {
        dispatch(fetchVariants())
    }, [dispatch])
    const handleAddVariant = (name = prompt('Give name to a variant:').toLowerCase()) => {
        const newVar = new Variant().receiveName(name)
        dispatch(addVariant(newVar))
    }
    return (
        <>
            {   
            (() => {
                    return variants.map(item => <VariantFunction variant={item} />)
                })(variants)
            }
            <button onClick={() => handleAddVariant()} className='add-variant-button big'>Add variant</button>
        </>
    )
}

export default Variants
