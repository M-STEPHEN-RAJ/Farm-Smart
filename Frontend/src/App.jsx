import React from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import BuySeedPage from './Pages/BuySeedPage/BuySeedPage'
import CropRecommenderPage from './Pages/CropRecommenderPage/CropRecommenderPage'
import FarmAIPage from './Pages/FarmAIPage/FarmAIPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DiseaseDetectionPage from './Pages/DiseaseDetectionPage/DiseaseDetectionPage'
import CartPage from './Pages/CartPage/CartPage'
import Notification from './Components/Notification/Notification'
import NotificationPage from './Pages/NotificationPage/NotificationPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/buy-seeds' element={<BuySeedPage />} />
        <Route path='/crop-recommender' element={<CropRecommenderPage />} />
        <Route path='/smart-farm-ai' element={<FarmAIPage />} />
        <Route path='/disease-detection' element={<DiseaseDetectionPage />}/>
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </Router>
  )
}

export default App