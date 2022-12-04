import { Fragment, useContext } from "react";
import { Outlet } from 'react-router-dom';

import { ReactComponent as CRWNLogo } from '../../assets/crown.svg'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {SignOutUser} from '../../utils/firebase/firebase.utils';

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    const signOutHandler = async () => {
        await SignOutUser();
        setCurrentUser(null);
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={'/'}>
                    <CRWNLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>
                        ) : (
                            <NavLink to={'/auth'}>Sign In</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;