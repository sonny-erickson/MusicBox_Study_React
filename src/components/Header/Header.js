import styled from "styled-components";
import { Link, useLocation} from "react-router-dom";

export default function Header({handleToggleTheme, isLight}) {
  const location = useLocation()
   return(
     <Wrapper>
         <p>App music</p>
         <nav>
            <Link to="/">
              <MenuEl>Home</MenuEl>
            </Link>
            <Link to="/about">
              <MenuEl>About</MenuEl>
            </Link>
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
  nav{
    display: flex;
  }
`;
const MenuEl = styled.p`
  padding-bottom: 2px;
  border-bottom : solid 2px
  &:hover {
    border-bottom: solid 2px;
  }
`;
