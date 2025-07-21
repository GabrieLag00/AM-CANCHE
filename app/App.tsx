import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./page"
import AboutPage from "./nosotros/page"
import CoursesPage from "./cursos/page"
import ResourcesPage from "./recursos/page"
import ContactPage from "./contact/page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
