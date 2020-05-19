import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './store/reducers';
import rootSaga from './store/sagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {

    const persistConfig = {
        key: 'root',
        storage,
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const sagaMiddleWare = createSagaMiddleware();

    const middlewares = [sagaMiddleWare];

    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        persistedReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    sagaMiddleWare.run(rootSaga);

    const persistor = persistStore(store);
    return { persistor, store };;
}
