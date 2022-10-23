import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CRWNLogo } from '../../assets/crown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {SignOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    const signOutHandler = async () => {
        await SignOutUser();
        setCurrentUser(null);
    };

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                    <CRWNLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'/shop'}>Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                        ) : (
                            <Link className="nav-link" to={'/auth'}>Sign In</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;