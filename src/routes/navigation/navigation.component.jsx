import { async } from "@firebase/util";
import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CRWNLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import {SignOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;