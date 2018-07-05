import BlogColMain from 'components/HW4Site/BlogColMain';
import UsersCol from 'components/HW4Site/UsersCol'

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
    }
]