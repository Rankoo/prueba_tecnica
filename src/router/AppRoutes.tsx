import {BrowserRouter, Routes, Route} from 'react-router'
import { Dashboard } from '../pages/Dashboard'
import { Checkout } from '../pages/Checkout'

export const AppRoutes = () => {
  
  return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  </>
  )
}
