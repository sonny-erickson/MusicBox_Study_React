import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header({handleToggleTheme, isLight}) {
  
   return(
     <Wrapper>
         <p>App music</p>
         <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
         </nav>
          <button onClick={handleToggleTheme}>
            Change to {isLight ?"dark": "light"} theme
          </button> 

     </Wrapper>
      
   );    
}

const Wrapper = styled.header`
  height : 80px;
  border-bottom : 1px solid;
  display : flex;
  justify-content : space-between;
  padding: 0px 24px;
  align-items : center;
  & a{
    text-decoration: none;
    color: inherit;
  }
  & a:first-child{
    margin-right: 12px;
  }
`;
