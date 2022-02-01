import axios from 'axios'
import DuelsGallery from './DuelsGallery'
import { useEffect, useState } from 'react'

const DuelsHuitièmes = () => {
  const [livres, setLivres] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/huitieme_de_finale/livres')
      .then((response) => {
        setLivres(response.data)
      })
  }, [])

  console.log(livres)

  return (
    <div className='duelsHuitièmes'>
      <div className='d-flex justify-content-center'>
        <DuelsGallery livres={livres} />
      </div>
    </div>
  )
}

export default DuelsHuitièmes
