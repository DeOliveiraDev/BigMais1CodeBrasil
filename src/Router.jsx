import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { DefaultLayout } from './Pages/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
