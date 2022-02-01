import CardLivre from './CardLivre'
import './styles/HomeGallery.css'

const HomeGallery = (props) => {
  console.log(props)
  return (
    <div className='homeGallery'>
      {props.livres.map((card) => (
        <CardLivre
          className='cardLivreHome'
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
  )
}

export default HomeGallery
