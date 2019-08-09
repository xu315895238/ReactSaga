import {takeEvery, take, put} from 'redux-saga/effects'
function* Num(abs){
    yield put({
        type:'ADD',
        value:abs.value
    })
}
export function* listsaga(){
    // yield takeEvery('ADDS', Num, '789')  //针对既定的值
    var takestate = yield take('ADDS');  // 返回 通过 dispatch 传送来的值
    yield Num(takestate)
}