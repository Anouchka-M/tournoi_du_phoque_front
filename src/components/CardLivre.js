import { MDBRipple } from 'mdb-react-ui-kit'

const CardLivre = (props) => {
  // console.log(props)
  return (
    <div
      className='card hover-overlay hover-shadow hover-zoom '
      style={{ width: '400px', height: '650px' }}
    >
      <MDBRipple
        rippleTag='div'
        style={{
          backgroundColor: 'var(--firstColor)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
          borderRadius: '15px',
          outline: 'solid 1px #6667AB',
          backdropFilter: 'blur(30px)',
          width: 'auto',
          height: '100%',
          transition: 'outline 0.2s linear',
        }}
      >
        <div className='card-body'>
          <img
            className='img-fluid w-100 '
            src={props.couverture}
            style={{
              maxHeight: '500px',
            }}
            alt={`Couverture du livre ${props.titre} écrit par ${props.auteurice} et illustré par ${props.illustrateur}`}
          />
        </div>
        <div
          className=' card-footer d-flex flex-column fixed-bottom'
          style={{
            height: 'auto',
            width: 'auto',
            backgroundColor: 'var(--secondColor)',
            fontFamily: 'var(--fontBody)',
          }}
        >
          <h6 className='card-title'>
            {props.titre} de {props.auteurice}
          </h6>
          <h6 className='card-title'>Illustré par {props.illustrateur}</h6>
          <h6 className='card-title'>Publié aux éditions {props.éditeur}</h6>
        </div>
      </MDBRipple>
    </div>
  )
}

export default CardLivre
