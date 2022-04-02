import './App.css'
import { ControlsSidebar } from './components/ControlsSidebar/ControlsSidebar'
import { MainView } from './components/MainView/MainView'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <ControlsSidebar/>
      <MainView/>
    </div>
  )
}

export default App
