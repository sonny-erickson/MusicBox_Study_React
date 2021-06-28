import styled from "styled-components";

export default function GridButton({isPlayed = false, soundPlay}) {
  
   return(
     <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
         

     </Wrapper>
      
   );    
}

const Wrapper = styled.div`
    border-radius: 4px;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,236,252,1) 100%);
    position: relative;
    overflow: hidden;
    &::before{
        position: absolute;
        content: "";
        top: 0; 
        bottom:0;
         left: 0;
         right: 0;
        .z-index: 0;
        background: rgb(79,251,63);
    background: radial-gradient(circle, rgba(79,251,63,1)${(props)=>(props.isPlayed ? "20%" : "0%")}, rgba(70,236,252,1) 100%);
        opacity: ${(props)=>(props.isPlayed ? "1" : "0")} ;
        transition: linear 0.2s;
    }
    &:hover::before{
        opacity: 1;
    }
    &:active::before{
        opacity: 1;
        background: rgb(63,94,251);
        background: radial-gradient(circle, rgba(63,94,251,1) 30%, rgba(70,236,252,1) 100%);
    }

    `;



