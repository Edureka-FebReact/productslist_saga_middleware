import {put,takeLatest,all} from 'redux-saga/effects'

function* fetchProducts() {
    const json = yield fetch("https://ngapi4.herokuapp.com/api/getProducts")
    .then(response => response.json());
    yield put({then: "PRODUCTS_RECEIVED", json: json})
}
function* actionWatcher() {
    yield takeLatest('GET_PRODUCTS', fetchProducts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ])
}