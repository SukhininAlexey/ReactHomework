import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/comments'; 

const initialState = {
    loading: false,
    error: null,
    comments: [],
}

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            comments: action.payload,
            loading: false,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
    },
}, initialState);