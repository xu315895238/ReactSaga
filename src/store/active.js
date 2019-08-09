import TypeName from './className'
import Fn from './Functions'

const defaultState = {
    num: 0
}

export default (state = defaultState,active) => {
    let newState = {...state};

    switch (active.type) {
        case TypeName.ADD:
            var val = Fn.ADDFN(active.value);
            newState.num = val
        break;
        default:
        break;
    }

    return newState

}