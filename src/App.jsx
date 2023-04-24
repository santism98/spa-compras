import { AppRouter } from "./routes/AppRouter"


function App() {



  return (
    <>
      <header className="bg-semi color-light text-center ">

        <p>Práctica SPA</p>

      </header>
      
      <AppRouter/>
    
      <footer className="bg-semi color-light text-center ">

        <p>Footer</p>

      </footer>
    </>
  )
}

export default App
