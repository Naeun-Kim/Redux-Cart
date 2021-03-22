import {NavLink} from "react-router-dom";

export default () => {
    return <div className='Menu'>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/beans'>beans</NavLink></li>
        </ul>
    </div>;
};