import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'

import { fetchLog } from './features/TheLog/logSlice'
import { toggleMindScrapModal } from './features/MindScrapForm/MindScrapModal/slice';
import { fetchInbox } from './features/Inbox/slice';

import logo from './logo.svg';

import Header from './features/Header/Header'
import CreateLetterModal from './features/CreateLetterModal/CreateLetterModal'
import Footer from './features/Standalone components/Footer'
import About from './features/About/About'
import Log from './features/TheLog/Log'
import Button from './features/Standalone components/Button';
import LogTextArea from './features/TheLog/LogTextArea';
import Article from './features/About/Articles/Article/Article';
import MindScrapModal from './features/MindScrapForm/MindScrapModal/MindScrapModal';
import Inbox from './features/Inbox/Inbox';






function App() {
  const dispatch = useDispatch()
  const inbox = useSelector(state => state.inbox.inboxData)

  const log = useSelector((state) => state.log.logData)

  //express node server test
  const [someData, setSomeData] = useState()

  //fetch everything
  useEffect(() => {
    console.log('fetchInbox')
    dispatch(fetchInbox())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchLog())
  // }, [dispatch])

  //remove spellcheck
  useEffect(() => document.querySelectorAll('textarea').forEach((textarea) => textarea.spellcheck = false))
  return (
    <Router>
      <Route
        path='/' exact
        render={
          (props) => (
            <>
              <MindScrapModal />
              <h1 className='main-title'>All in all, human is a variant</h1>
              <button className='mind-modal-button' onClick={() => dispatch(toggleMindScrapModal())}>manual message catch/map</button>
              <div className="main-container">
                <div className="sub-container" >
                  <Header title='Inbox' color='#ffe4e1' />
                  <CreateLetterModal />
                  {inbox.length > 0 ? <Inbox /> : 'You have no tasks lazy bitch'}
                </div>
                <div className="sub-container">
                  <Header title='History' color='#f2eecb' />
                  <Log />
                  <LogTextArea />
                </div>

              </div>

              <Footer />
            </>
          )
        }
      />
      <Route path='/about' exact
        render={
          (props) => (
            <>
              <div className="main-container" >
                <div className="sub-container" style={{ width: '90%', minHeight: '650px' }}>
                  <Header title="Hints and other important info" color='#e8f48c' />
                  <Article />
                </div>
              </div>
              <About />
            </>
          )
        }
      />
    </Router>

  )
}

export default App;
