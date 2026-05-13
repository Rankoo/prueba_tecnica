import {BrowserRouter, Routes, Route} from 'react-router'
import { Dashboard } from '../pages/Dashboard'
import { Checkout } from '../pages/Checkout'
import { Layout } from '../components/Layout'

export const AppRoutes = () => {
  
  return (<>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/checkout' element={<Checkout />} />
            </Route>
        </Routes>
      </BrowserRouter>
  </>
  )
}
