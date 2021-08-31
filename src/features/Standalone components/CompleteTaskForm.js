// import React from 'react'
// import Button from './Button'

// function completeTaskForm({ showCompleteTaskForm, task, onCompleteClick, onCompleteLog }) {
//     let trigger
//     return (
//         <div>
//                         {showCompleteTaskForm ? 
//                 <form onSubmit={() => onCompleteLog(task, trigger)}>
//                     <h3>Task {task.header}</h3>
//                     <label htmlFor="">Can you remember the trigger?</label>
//                     <input type="text" value="What caused you to act?" onChange={(event) => trigger = event.target.value}/>
//                     <input type="submit" value="choose" color='008000'/>
//                     <input type="submit" value="think later" color='#ff0000' onClick={trigger = undefined}/>
//                 </form> : <Button onClick={onCompleteClick} />
//             }
//         </div>
//     )
// }

// export default completeTaskForm
