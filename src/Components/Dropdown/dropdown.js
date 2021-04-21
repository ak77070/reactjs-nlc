import React, { useState } from 'react';
import { GamesItems } from './menuitems';
import './style.css';
import { NavLink } from 'react-router-dom';

function GamesDropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {GamesItems.map((item, index) => {
                return (
                    <li key={index}>
                    <NavLink
                        className={item.cName}
                        to={item.path}
                        onClick={() => setClick(false)}
                    >
                        {item.title}
                    </NavLink>
                    </li>
                );
                })}
            </ul>
        </>
    );
}

// function SocialsDropdown() {
//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);

//     return (
//         <>
//             <ul
//                 onClick={handleClick}
//                 className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//             >
//                 {SocialItems.map((item, index) => {
//                 return (
//                     <li key={index}>
//                     <NavLink
//                         className={item.cName}
//                         to={item.path}
//                         onClick={() => setClick(false)}
//                     >
//                         {item.title}
//                     </NavLink>
//                     </li>
//                 );
//                 })}
//             </ul>
//         </>
//     );
// }
  
// export {SocialsDropdown}
export default GamesDropdown;
