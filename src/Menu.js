import {NavLink} from "react-router-dom";
import Icon from './components/Icon';

export default () => {
    return <div className='Menu'>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/beans'>beans</NavLink></li>
            <li><NavLink to='/cart'>
                    <Icon bag />
                </NavLink>
            </li>
        </ul>
    </div>;
};