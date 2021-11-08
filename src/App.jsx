import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'


import CreateLetterModal from './components/modals/CreateLetterModal'
import { toggleCreateLetterModal } from './redux/modals.slice'






function App({toggleCreateLetterModal}) {
  
  //remove spellcheck
  useEffect(() => document.querySelectorAll('textarea').forEach((textarea) => textarea.spellcheck = false))

  return (
    <div>
      <button onClick={toggleCreateLetterModal}>Create Letter</button>
      <CreateLetterModal />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCreateLetterModal: () => dispatch(toggleCreateLetterModal())
})

export default connect(null, mapDispatchToProps)(App)
