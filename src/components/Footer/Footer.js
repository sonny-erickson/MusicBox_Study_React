import styled from "styled-components";

export default function Footer() {
  
   return(
     <Wrapper>
         <h1>Footer</h1>
     </Wrapper>
      
   );    
}

const Wrapper = styled.footer`
height : 80px;
border-top : 1px solid;
display : flex;
justify-content : center;
align-items : center`;
