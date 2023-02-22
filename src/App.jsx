import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import Community from './Pages/Community/Community'
import Learn from './Pages/Learn/Learn'
import Purpose from './Pages/Purpose/Purpose'

export default function App () {
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
   },
   {
     path: "/purpose",
     element: <Purpose />,
   },
   {
     path: "/community",
     element: <Community />,
   },
   {
     path: "/careers",
     element: <Careers />,
   },
   {
     path: "/learn",
     element: <Learn />,
   },
 ]);

 return <RouterProvider router = {router} />;
}