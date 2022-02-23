import axios from 'axios'
import DuelsGallery from '../components/DuelsGallery'
import { useEffect, useState } from 'react'

const DuelsDemi = () => {
  const [livres, setLivres] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4242/demi_finale/livres').then((response) => {
      setLivres(response.data)
    })
  }, [])

  console.log(livres)

  return (
    <div className='d-flex justify-content-center'>
      <DuelsGallery livres={livres} />
    </div>
  )
}

export default DuelsDemi
