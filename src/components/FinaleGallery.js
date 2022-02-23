import CardLivre from './CardLivre'
import { useState, useEffect } from 'react'
import './styles/DuelsGallery.css'
import couvGagnant from '../assets/Phoque2021.png'

const FinaleGallery = (props) => {
  const [seeWinner, setSeeWinner] = useState(false)
  console.log(props.livres)

  return (
    <div>
      <div>
        {seeWinner ? (
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            Félicitations au grand gagnant du tournoi du phoque 2021 !
          </h2>
        ) : (
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            En route pour le du-du-duel final !
          </h2>
        )}
        {props.livres.length > 0 ? (
          <div className='groupCards'>
            <div className={seeWinner ? 'concurrentsOff' : ''}>
              <CardLivre
                key={props.livres[0].id}
                id={props.livres[0].id}
                titre={props.livres[0].titre}
                auteurice={props.livres[0].auteurice}
                couverture={props.livres[0].couverture}
                éditeur={props.livres[0].éditeur}
                illustrateur={props.livres[0].illustrateur}
              />
            </div>
            <div className={seeWinner ? 'concurrentsOff' : ''}>
              <CardLivre
                className={seeWinner ? 'concurrentsOff' : ''}
                key={props.livres[1].id}
                id={props.livres[1].id}
                titre={props.livres[1].titre}
                auteurice={props.livres[1].auteurice}
                couverture={props.livres[1].couverture}
                éditeur={props.livres[1].éditeur}
                illustrateur={props.livres[1].illustrateur}
              />{' '}
            </div>
            <div className={!seeWinner ? 'concurrentsOff' : 'winnerOn'}>
              <CardLivre
                key={props.livres[2].id}
                id={props.livres[2].id}
                titre={props.livres[2].titre}
                auteurice={props.livres[2].auteurice}
                couverture={couvGagnant}
                éditeur={props.livres[2].éditeur}
                illustrateur={props.livres[2].illustrateur}
              />
            </div>
            <div
              className={
                seeWinner
                  ? 'grid4 winnerOff d-flex align-items-center justify-content-center'
                  : 'grid4 d-flex align-items-center justify-content-center'
              }
            >
              <button
                className='btn btn-lg'
                type='button'
                styles={{
                  width: '100px',
                  height: '60px',
                }}
                onClick={() => setSeeWinner(!seeWinner)}
              >
                Afficher le grand gagnant
              </button>
            </div>
            {/* <div
              className={!seeWinner ? 'displayOff' : 'grid5 concurrentsOn'}
            ></div>
            <div
              className={!seeWinner ? 'displayOff' : 'grid6 concurrentsOn'}
            ></div> */}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default FinaleGallery
