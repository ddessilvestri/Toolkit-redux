import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment, incrementBy} from './store/slices/counter';
import './App.css'

function App() {

  const {counter} =  useSelector(state => state.counter);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is: {counter}</p>
        <button onClick={()=> dispatch(increment())}>
          +
        </button>
        <button onClick={()=> dispatch(decrement())}>
          -
        </button>        
        <button onClick={()=> dispatch(incrementBy(2))}>
          +2
        </button>
      </div>
     
    </div>
  )
}

export default App
