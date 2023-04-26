import './App.css'
import { Routes, Route } from 'react-router-dom';
import NoAuthLayout from './layouts/NoAuthLayout';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<NoAuthLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App