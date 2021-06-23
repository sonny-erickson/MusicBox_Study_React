import styled from "styled-components";

export default function Header({handleToggleTheme, isLight}) {
  
   return(
     <Wrapper>
         <p>App music</p>
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
  align-items : center
`;
