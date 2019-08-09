import Home from '../component/home'
import History from '../component/histroy'
import Homesub from '../component/homesub'

const router = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/history',
                component: History
            },
            {
                path: '/home/homesub',
                component: Homesub
            },
            {
                to: '/home/history',
                from: '/home'
            }
        ]
    },
    {
        to: '/home',
        from: '/'
    }
]

export default router