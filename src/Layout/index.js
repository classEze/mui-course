import routeList from '../data/routing_list';
// import NavBar from '../components/molecules/NavDrawer/navbar';
import { Route } from 'react-router-dom';

function Index() {
       const allRoutes = routeList.map(item => {
        if(item.nav){
            return <>
                    <Route path={item.route} element={<item.component />} />
                   </>
        }

        else {
            return <>
                    <Route path={item.route} element={<item.component />} />
                   </>
        }
    }
  )
  return allRoutes
       
}

export default Index