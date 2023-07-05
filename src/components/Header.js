import React from "react"
import useBreakpoint from "../hooks/useBreakpoint";
import Navbar from "./Navbar";
import logo from "../images/logo.svg";


// export default function Header(props) {
//   const currentUser = useContext(CurrentUserContext);
//
//   return (
//     <header className="header">
//       <img className="header__logo" src={logo} alt="Логотип сайта" />
//
//       <span className="header__email">{currentUser?.email}</span>
//       <Link
//         to={props.linkUrl || '#'}
//         className={`header__link ${props.linkExtraClass || ''}`}
//         onClick={props.onLinkClick}
//       >
//         {props.linkText}
//       </Link>
//     </header>
//   );
// }

export default function Header() {
  const isMobile = useBreakpoint();

  return (
    <div className="header">
      <img className="header__logo" src={logo} />
      <Navbar />
    </div>
  )
}
