import CardLivre from './CardLivre'
import { useEffect, useState } from 'react'
import './styles/DuelsGallery.css'

const DuelsGallery = (props) => {
  const [idDuel, setIdDuel] = useState(0)
  const [duel, setDuel] = useState(props.livres[0])
  // const [otherBooks, setotherBooks] = useState(1)
  const [seeWinner, setSeeWinner] = useState(false)

  const seeNextBooks = () => {
    if (idDuel < props.livres.length) {
      setDuel(undefined)
      setIdDuel(idDuel + 1)
      setSeeWinner(false)
    }
  }

  const seePreviousBooks = () => {
    if (idDuel > 0) {
      setDuel(undefined)
      setIdDuel(idDuel - 1)
      setSeeWinner(false)
    }
  }

  useEffect(() => {
    if (idDuel > 0 && idDuel < props.livres.length) {
      setDuel(props.livres[idDuel])
    } else {
      setDuel(props.livres[0])
    }
  }, [idDuel, props.livres])

  const winnerAppear = () => {
    setSeeWinner(true)
  }

  console.log(duel)

  return (
    <div className=''>
      <div>
        {seeWinner ? (
          <h2
            className='annonceGagnant'
            style={{
              textAlign: 'center',
            }}
          >
            Voici le gagnant !
          </h2>
        ) : (
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            En route pour le du-du-duel !
          </h2>
        )}

        <div className='groupCards'>
          {duel !== undefined
            ? duel.map((card) => (
                <CardLivre
                  key={card.id}
                  id={card.id}
                  titre={card.titre}
                  auteurice={card.auteurice}
                  couverture={card.couverture}
                  éditeur={card.éditeur}
                  illustrateur={card.illustrateur}
                />
              ))
            : ''}
          <div
            className={
              seeWinner
                ? 'grid4 winnerOff d-flex align-items-center justify-content-center'
                : 'grid4 winnerOn d-flex align-items-center justify-content-center'
            }
          >
            <button
              className='btn btn-lg'
              type='button'
              styles={{
                width: '100px',
                height: '60px',
              }}
              onClick={() => winnerAppear()}
            >
              Afficher le gagnant
            </button>
          </div>
          <div className={!seeWinner ? 'displayOff' : 'grid5 concurrentsOn'}>
            {' '}
          </div>
          <div className={!seeWinner ? 'displayOff' : 'grid6 concurrentsOn'}>
            {' '}
          </div>
        </div>
        <div
          className='d-flex justify-content-between align-items-center btn-group'
          role='group'
          aria-label='Call to action'
          style={{
            lineHeight: '1.3333333',
            padding: '00px 20px',
            width: '300px',
            margin: 'auto',
          }}
        >
          <button
            type='button'
            className='btn btn-lg d-flex justify-content-start align-items-center'
            onClick={seePreviousBooks}
            style={{
              width: '140px',
              height: '60px',
              padding: '0',
              marginRight: '3px',
            }}
          >
            précédent
          </button>
          <button
            style={{
              borderRadius: '50%',
              background: 'var(--firstColor)',
              padding: '20px',
              fontWeight: '600',
              cursor: 'help',
              borderStyle: 'none',
            }}
          >
            ou
          </button>
          <button
            type='button'
            className='btn btn-lg d-flex justify-content-center align-items-center'
            onClick={seeNextBooks}
            style={{
              width: '140px',
              height: '60px',
              padding: '0',
              marginLeft: '3px',
            }}
          >
            prochain
          </button>
        </div>
      </div>
    </div>
  )
}

export default DuelsGallery
