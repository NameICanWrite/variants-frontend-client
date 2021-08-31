import React from 'react'
import Button from '../../../Standalone components/Button'
import {useDispatch} from 'react-redux'
import {postArticle} from '../articlesSlice'
import axios from 'axios'

function Article({article = {}}) {
    const dispatch = useDispatch()

    const headerRef = React.createRef(null)
    const textRef = React.createRef(null)
    const [editable, setEditable] = React.useState(false)
    
    const onSend = async (header, text = '', type = '') => {
        const currentArticle = {
            type,
            id: article.id ? article.id : Date.now(),
            header,
            text,
            date: article.date || Date.now()
        }
        console.log(currentArticle)
       await dispatch(postArticle(currentArticle))
    }

    //autosize

    const changeTextareaSize = async () => {
        textRef.current.style.height = 'inherit';
        textRef.current.style.height = `${textRef.current.scrollHeight +2}px`;
        headerRef.current.style.height = 'inherit';
        headerRef.current.style.height = `${headerRef.current.scrollHeight +2}px`;
    }

    return (
        <div>
            <header className="header">
                <textarea 
                    className={`header-textarea${editable ? '' : '-disabled'}`} 
                    placeholder={editable && 'Title of the article'}
                    ref={headerRef}
                    readOnly={!editable}
                    onChange={changeTextareaSize}
                >
                </textarea>
                <Button 
                    text={editable ? 'post' : 'edit'}
                    onClick={
                        () => {
                            // editable ? autosaveDelete() && onSend(headerRef.current.value, textRef.current.value) : autosaveEnable()  
                            // setEditable(!editable)
                        }
                    }
                />
            </header>
            <textarea 
                className={`content-textarea${editable ? '' : '-disabled'}`}
                placeholder={editable && 'Content of the article'}
                ref={textRef}
                readOnly={!editable}
                onChange={changeTextareaSize}
            >
            </textarea>
        </div>
    )
}

export default Article
