import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import BookItemPage from './pages/BookItemPage';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<MainPage />} />
    <Route path="/:id" element={<BookItemPage />} />
  </>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
