import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CreateEmployee } from './pages/CreateEmployee'
import { EmployeeList } from './pages/EmployeeList'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateEmployee/>}/>
        <Route path='/EmployeeList' element={<EmployeeList/>}/>
      </Routes>
    </Router>
  )
}

export default App
