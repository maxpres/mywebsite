// import React, { useContext } from "react";
// import "./Toggle.css";
// import Sun from "../../img/sun.png";
// import Moon from "../../img/moon.png";
// import { ThemeContext } from "../../Context";

// const Toggle = () => {
//   const theme = useContext(ThemeContext);

//   const handleClick = () => {
//     theme.dispatch({ type: "TOGGLE" });
//   };

//   return (
//     <div className="t">
//       <img src={Sun} alt="" className="t-icon" />
//       <img src={Moon} alt="" className="t-icon" />
//       <button
//         className="t-button"
//         onClick={handleClick}
//         style={{ left: theme.state.darkMode ? -5 : 25 }}
//       ></button>
//     </div>
//   );
// };

// export default Toggle;
