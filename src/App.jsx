
import { Suspense } from "react";
import Header from './layout/header/header'
import Loader from './components/States/Loader'

import './App.css'

function App() {
  return (
    <Suspense fallback={Loader}>
      <Header />
    </Suspense>
    
  )
}

export default App
