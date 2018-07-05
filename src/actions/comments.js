import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFaled = createAction('[Comments] Load faled');

export const loadComments = (dispatch) => {
    console.log("Load comments!");
    dispatch(loadStarted());
    fetch('http://localhost:8888/comments')
    .then((response) => response.json())
    .then((comments) => {
        dispatch(loadCompleted(comments));
        console.log(loadCompleted(comments));
    })
    .catch((error) => {
        dispatch(loadFailed(error));
    });
};
