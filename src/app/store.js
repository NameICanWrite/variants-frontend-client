import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../features/Header/headerSlice';
import logReducer from '../features/TheLog/logSlice'
import articlesReducer from '../features/About/Articles/articlesSlice'
import createLetterModalReducer from '../features/CreateLetterModal/slice'
import detailsReducer from '../features/Details/detailsSlice';
import scalesReducer from '../features/Standalone components/scalesSlice'
import tasksFilterReducer from '../features/TasksFilter/tasksFilterSlice';
import variantsReducer from '../features/Variants/slice'
import mindScrapModalReducer from '../features/MindScrapForm/MindScrapModal/slice'
import awaitingLettersReducer from '../features/CreateLetterModal/CreateLetterForm/slice'
import inboxReducer from '../features/Inbox/slice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    log: logReducer,
    articles: articlesReducer,
    //addTaskForm: addTaskFormReducer,
    createLetterModal: createLetterModalReducer,
    details: detailsReducer,
    scales: scalesReducer,
    tasksFilter: tasksFilterReducer,
    variants: variantsReducer,
    mindScrapModal: mindScrapModalReducer,
    awaitingLetters: awaitingLettersReducer,
    inbox: inboxReducer
  },
});
