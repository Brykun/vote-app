import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PollPage from './pages/PollPage';
import NewPollPage from './pages/NewPollPage'; 
import EditPollPage from './pages/EditPollPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/polls/new" element={<NewPollPage />} /> 
        <Route path="/poll/:id" element={<PollPage />} />
        <Route path="/poll/:id/edit" element={<EditPollPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
