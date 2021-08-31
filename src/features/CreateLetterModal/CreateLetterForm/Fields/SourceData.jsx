import React from 'react'
import { useState, useEffect } from 'react'

import Tabs from '../../../Standalone components/Tabs/Tabs'

import folderImg from '../../../../img/icons/folder.png'

function SourceData({ handle }) {

    const textareaRef = React.createRef()
    const [textareaValue, setTextareaValue] = useState('')

    const changeTextareaSize = async () => {
        textareaRef.current.style.height = 'inherit';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }

    const tabs = [
        {
            title: 'Plain',
            Content: function () {
                return (
                    <div className="content-container">
                        <label>
                            <span>add text</span>
                            <textarea key='1234' className='textarea' cols="25" rows="4" ref={textareaRef}
                                onChange={(e) => {
                                    setTextareaValue(e.target.value)
                                    changeTextareaSize(e)
                                    handle.plain.text(e.target.value)
                                }}
                                value={textareaValue}
                            ></textarea>
                        </label>
                        <div className="drop-files-container">
                            <label className="drop-files" style={{ transform: 'translate(-35%, 20%)' }}>
                                <span>drop files</span>
                                <img src={folderImg} className='drop-img' />
                            </label>
                        </div>
                    </div>
                )
            }
        },
        {
            title: 'Social',
            Content: function () {
                return (
                    <div>

                    </div>
                )
            }
        },
        {
            title: 'Neural',
            Content: function () {
                return (
                    <div>

                    </div>
                )
            }
        },
    ]

    return (
        <div>
            <fieldset className='main-fieldset'>
                <Tabs tabs={tabs}/>
            </fieldset> 
        </div>
    )
}

// function tabs(handle, props) {
//     return (
//         [
//             {
//                 title: 'Plain',
//                 Content: function () {
//                     const textareaValue = props.plain.textareaValue
//                     const setTextareaValue = props.plain.setTextareaValue

//                     const textareaRef = React.createRef()

//                     const changeTextareaSize = async () => {
//                         textareaRef.current.style.height = 'inherit';
//                         textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
//                     }
//                     return (
//                         <div className="content-container">
//                             <label>
//                                 <span>add text</span>
//                                 <textarea key='1234' className='textarea' cols="25" rows="4" ref={textareaRef}
//                                     onChange={(e) => {
//                                         setTextareaValue(e.target.value)
//                                         changeTextareaSize(e)
//                                         handle.plain.text(e.target.value)
//                                     }}
//                                     value={textareaValue}
//                                 ></textarea>
//                             </label>
//                             <div className="drop-files-container">
//                                 <label className="drop-files" style={{ transform: 'translate(-35%, 20%)' }}>
//                                     <span>drop files</span>
//                                     <img src={folderImg} className='drop-img' />
//                                 </label>
//                             </div>
//                         </div>
//                     )
//                 }
//             },
//             {
//                 title: 'Social',
//                 Content: function () {
//                     return (
//                         <div>

//                         </div>
//                     )
//                 }
//             },
//             {
//                 title: 'Neural',
//                 Content: function () {
//                     return (
//                         <div>

//                         </div>
//                     )
//                 }
//             }
//         ]
//     )
// }



export default SourceData
