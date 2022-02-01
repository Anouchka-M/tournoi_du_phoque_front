import axios from 'axios'
import HomeGallery from '../components/HomeGallery'
import { useEffect, useState } from 'react'

const Home = () => {
  const [livres, setLivres] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4242/livres/read').then((response) => {
      setLivres(response.data)
    })
  }, [])

  return (
    <div className='home'>
      <div>
        <HomeGallery livres={livres} />
      </div>
    </div>
  )
}

export default Home
