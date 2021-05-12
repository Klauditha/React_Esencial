import './styles/App.css';
import Header from './components/header';
import Dish, * as D from './components/dish';

function App() {
  return (
    <div className="App">
     <Header/>
					<Dish/>
					<D.Flag/>
    </div>

  );
}

export default App;
