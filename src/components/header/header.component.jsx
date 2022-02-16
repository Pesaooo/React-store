import React from 'react';
// * Router
import { Link } from 'react-router-dom';
// * Logo
import { ReactComponent as Logo } from '../../assets/crown.svg'
// * Firebase
import { auth } from '../../firebase/firebase.utils'
// * Redux
import { connect } from 'react-redux'
//  * Syles and Icons
import './header.styles.scss'
// * Components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <button className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </button>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        <CartDropdown />
    </div>

)



const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header) 