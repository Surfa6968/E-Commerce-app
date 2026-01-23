import './App.css'
import Header from './components/Organisms/Header'
import Footer from './components/Organisms/Footer'
import Home from './pages/Home' 



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
