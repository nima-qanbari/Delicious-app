import './App.css';
// import { BrowserRouter as Router } from "react-router-dom";


//componetnts
import Category from './components/Category';
import Search from './components/Search';

//pages
import Pages from './pages/Pages';

function App() {
  return (
    <div>
        <Search />
        <Category />
        <Pages />
     
    </div>
  );
}

export default App;
