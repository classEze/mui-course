import { BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import Index from './Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Index />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
