import React from 'react'
import axios from 'axios'

import serverPath from "../../index";

function TextareaForm({onSend, autosaveAdress = false}) {
    let textareaRef = React.useRef(null)

        // saves textarea in case of page reload 
        // React.useEffect(() => {
        //     autosaveAdress && ( async () => {
        //         const response = await axios.get(serverPath + `/autosave/${autosaveAdress}`)
        //         textareaRef.current.value =response.data.value
        //     })()
        // },[])
    
        // React.useEffect(() => setInterval( () => {
        //     textareaRef.current && autosaveAdress &&
        //     axios.put(serverPath + `/autosave/${autosaveAdress}`, {id:`${autosaveAdress}`, value: `${textareaRef.current.value}` })
        // } , 5000
        // ),[])

    //changes size according to text
    const changeTextareaSize = async () => {
        textareaRef.current.style.height = 'inherit';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight +2}px`;
    }
    return (
        <div className='logtextarea-container'>
            <textarea 
                ref={textareaRef}
                onChange={changeTextareaSize}
                className='log-textarea'>
            </textarea>
            <img className='send-button' 
                onClick={
                    () => {
                        onSend(textareaRef.current.value)
                        textareaRef.current.value = ''
                    }
                }
                src="https://image.flaticon.com/icons/png/512/60/60525.png" alt="" />
        </div>
    )
}

export default TextareaForm
