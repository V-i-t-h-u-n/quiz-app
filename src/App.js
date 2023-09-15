import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import QuizApp from './components/QuizApp/QuizApp';
import 'bootstrap/dist/css/bootstrap.css';
import Result from './components/Result/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizApp />}></Route>
          <Route path="/result-page" element={<Result />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
