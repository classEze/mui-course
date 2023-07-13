import PageWithNav from '../components/organisms/PageWithNav';
import routeList from '../data/routing_list';
import { Route, Routes } from 'react-router-dom';

function Index() {
     
  return (
    <Routes>
        { 
        routeList.map(item => {
            return <Route path={item.route} element={<PageWithNav {...item}/>} />
        })
      }
     </Routes>
  )
       
}

export default Index