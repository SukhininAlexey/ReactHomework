import BlogColMain from 'components/HW4Site/BlogColMain';
import UsersCol from 'components/HW4Site/UsersCol';
import PostComments from 'components/HW4Site/PostComments';

export default [
    {
        path: '/posts',
        exact: true,
        component: BlogColMain,
    },
    {
        path: '/users',
        exact: true,
        component: UsersCol,
    },
    {
        path: '/comments',
        exact: true,
        component: PostComments,
    } 
]