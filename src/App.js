import './App.css';
import Base from './pages/Base';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
