import axios from 'axios'
import FinaleGallery from '../components/FinaleGallery'
import { useEffect, useState } from 'react'

const Finale = () => {
  const [livres, setLivres] = useState([])

  // const axiosLivres = async () => {
  //   const response = await axios.get('http://localhost:4242/finale/livres')
  //   return await response.data
  // }

  // useEffect(() => {
  //   setLivres(axiosLivres())
  // }, [])

  useEffect(() => {
    axios.get('http://localhost:4242/finale/livres').then((response) => {
      setLivres(response.data)
    })
  }, [])

  console.log(livres)

  return (
    <div className='d-flex justify-content-center'>
      <FinaleGallery livres={livres} />
    </div>
  )
}

export default Finale
