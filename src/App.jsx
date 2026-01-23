import './App.css'
import Header from './components/Organisms/Header'
import Home from './pages/Home'
import 
import Footer from './components/Organisms/Footer'


function App() {
  
  return (
    <>
      <div className='app-container'>
        <Header />
        <main className='content'>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
