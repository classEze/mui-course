import Home from '../Pages/Home/home';
import Form from '../Pages/Form/form';
const routes = [
    {
        nav:true,
        route:"/",
        component:Home,
        text:"Home"
    },
    {
        nav:true,
        route:"/form",
        component:Form,
        text:"Forms"
    },
    {
        nav:true,
        route:"/table",
        component:Home,
        text:"Table"
    },
    {
        nav:true,
        route:"/grid",
        component:Home,
        text:"Grid"
    },
    {
        nav:true,
        route:"/datagrid",
        component:Home,
        text:"Data Grid"
    }
]

export default routes