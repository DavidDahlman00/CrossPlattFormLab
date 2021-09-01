import { combineReducers } from "redux";
import { reducer as counterReducer} from './counter'
import { reducer as addReducer} from './addImages'
const rootReducer = combineReducers({
    counter: counterReducer,
    addImage: addReducer
})

export {rootReducer};