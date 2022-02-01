import CardLivre from './CardLivre'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './styles/DuelsGallery.css'

const DuelsGallery = (props) => {
  // const [duel, setDuel] = useState(0)
  // const [otherBooks, setotherBooks] = useState(1)

  // const seeNextBooks = () => {
  //   if (otherBooks < props.livres.length) {
  //     setotherBooks(otherBooks + 1)
  //     setDuel(duel + 1)
  //   }
  // }

  // const seePreviousBooks = () => {
  //   if (otherBooks > 1) {
  //     setotherBooks(otherBooks - 1)
  //     setDuel(duel - 1)
  //   }
  // }

  return (
    <div className='duelsGallery'>
      {props.livres.map((groupCards) => (
        <div>
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            En route pour le du-du-duel !
          </h1>

          <div className='groupCards'>
            {console.log(groupCards)}
            {groupCards.map((card) => (
              <CardLivre
                key={card.id}
                id={card.id}
                titre={card.titre}
                auteurice={card.auteurice}
                couverture={card.couverture}
                éditeur={card.éditeur}
                illustrateur={card.illustrateur}
              />
            ))}
          </div>
        </div>
      ))}
      <div>
        <button onClick={''} className='btn btn-lg btn-block'>
          Afficher le gagnant
        </button>
      </div>
    </div>
  )
}

export default DuelsGallery
