import logo from '../assets/logo_phoque.png'

import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const Header = () => (
  <header>
    <Navbar
      fixed='top'
      light
      expand='xs'
      className='border-bottom border-gray'
      style={{ height: 80, backgroundColor: 'rgba(241, 231, 246, 0.99)' }}
    >
      <Container>
        <Nav
          className='d-flex align-items-center justify-content-md-between'
          navbar
        >
          <NavItem>
            <NavLink
              className='font-weight-bold'
              href='/'
              style={{ fontFamily: 'var(--fontTitle)', fontSize: '30px' }}
            >
              accueil
            </NavLink>
          </NavItem>
          <NavbarBrand href='/' style={{ width: 80 }}>
            <p
              className='font-weight-bold'
              style={{ fontFamily: 'var(--fontTitle)', fontSize: '30px' }}
            >
              LE TOURNOI DU
            </p>
            <img
              src={logo}
              alt='logo'
              className='position-relative img-fluid p-2'
            />
          </NavbarBrand>

          <UncontrolledDropdown
            className='d-flex align-items-center'
            nav
            inNavbar
            style={{ fontFamily: 'var(--fontTitle)', fontSize: '30px' }}
          >
            <DropdownToggle className='font-weight-bold' nav caret>
              rounds
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                href='/duels'
                style={{ fontFamily: 'var(--fontTitle)', fontSize: '20px' }}
              >
                huitièmes de finale
              </DropdownItem>
              <DropdownItem
                style={{ fontFamily: 'var(--fontTitle)', fontSize: '20px' }}
              >
                quarts de finale
              </DropdownItem>
              <DropdownItem
                style={{ fontFamily: 'var(--fontTitle)', fontSize: '20px' }}
              >
                demi-finale
              </DropdownItem>
              <DropdownItem
                style={{ fontFamily: 'var(--fontTitle)', fontSize: '20px' }}
              >
                finale
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  </header>
)

export default Header
