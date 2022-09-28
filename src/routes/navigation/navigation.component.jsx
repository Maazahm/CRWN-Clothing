import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CRWNLogo} from '../../assets/crown.svg'
import './navigation.styles.scss';

const Navigation = () => (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to={'/'}>
                <CRWNLogo className='logo' />
            </Link>
            <div className="nav-links-containers">
                <Link className="nav-link" to={'/shop'}><div>Shop</div></Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
);

export default Navigation;