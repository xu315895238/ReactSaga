import {createStore, applyMiddleware} from 'redux'
import active from './active'

import createsaga from 'redux-saga'
import {listsaga} from '../saga'

let sagamidd = createsaga()
const stores = createStore(active, applyMiddleware(sagamidd))

sagamidd.run(listsaga)

export default stores