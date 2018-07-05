import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFaled = createAction('[Users] Load faled');

export const loadUsers = (dispatch) => {
    dispatch(loadStarted());
    fetch('http://localhost:8888/users')
    .then((response) => response.json())
    .then((users) => {
        dispatch(loadCompleted(users));
    })
    .catch((error) => {
        dispatch(loadFailed(error));
    });
};
