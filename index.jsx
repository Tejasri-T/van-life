
import { createRoot } from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route, Link } from 'react-router-dom';


import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx"
import VanDetail,{loader as vansDetailLoader} from './pages/Vans/VanDetail.jsx';
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx';
import HostVans,{loader as hostVanLoader} from './pages/Host/HostVans.jsx';
import HostVanDetail,{loader as hostVanDetailLoader} from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import Login ,{loader as loginLoader ,action as loginAction} from './pages/Login.jsx';
import NotFound from './pages/Notfound.jsx';
import Error from './components/Error.jsx';
import { requireAuth } from './utils';



import "./server"




function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        // errorElement={<Error />}
        loader={vansLoader}
      />
      <Route 
        path="vans/:id" 
        element={<VanDetail />} 
        loader = {vansDetailLoader}
      />

      <Route 
        path="host" 
        element={<HostLayout />}
        //  loader = {async () =>  await requireAuth() }
      >
        <Route 
          index 
          element={<Dashboard />} 
          loader = {async () =>  await requireAuth() }
        />
        <Route 
          path="income" 
          element={<Income />} 
          loader = {async () =>  await requireAuth() }
        />
        <Route 
          path="reviews" 
          element={<Reviews />} 
          loader = {async () =>  await requireAuth() }
        />
        <Route 
          path="vans" 
          element={<HostVans />} 
          loader = {hostVanLoader}
        />
        <Route 
          path="vans/:id" 
          element={<HostVanDetail />}
          loader = {hostVanDetailLoader}
        >
          <Route 
            index 
            element={<HostVanInfo />} 
            loader = {async () =>  await requireAuth() }
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing />} 
            loader = {async () =>  await requireAuth() }
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos />} 
            loader = {async () =>  await requireAuth() }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ))



  return (
    <RouterProvider router={router} />
  )
}



const root = createRoot(document.getElementById('root'));
root.render(
  <App />
)