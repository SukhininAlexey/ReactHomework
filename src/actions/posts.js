import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFaled = createAction('[Posts] Load faled');

export const loadPosts = (dispatch) => {
    dispatch(loadStarted());
    fetch('http://localhost:8888/posts')
    .then((response) => response.json())
    .then((users) => {
        dispatch(loadCompleted(users));
    })
    .catch((error) => {
        dispatch(loadFailed(error));
    });
};
