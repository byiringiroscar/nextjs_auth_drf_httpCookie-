import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from './reducers';


let store;

function initStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}

export const initalizeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);
    // afater navigating to a page with an initial redux state, merge that state
    // with the current state in the store and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // reset the current store
        store = undefined;
    }
    // for SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;
    //  Create the store once in the client
    if (!store) store = _store;

    return _store;
}

export function useStore(initialState) {
    const store = useMemo(() => initalizeStore(initialState), [initialState]);
    return store;
}
