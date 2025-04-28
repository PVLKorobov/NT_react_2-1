import Portfolio from './Portfolio.jsx'
import projects from "./projects.js"
import './App.css'


function App() {
  return (
    <div className='contents'>
      <Portfolio
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        projects={projects}
      />
    </div>
  )
}

export default App
