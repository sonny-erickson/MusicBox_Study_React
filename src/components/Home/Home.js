import styled from "styled-components";
import GridButton from "./GridButton";
import useSounds from "../../hooks/useSounds";

export default function Home() {

    const {buttonList} = useSounds();
   return(
     <Wrapper>
         <h1>home</h1>
         <Grid>
             {buttonList.map(({soundPlay}, index)=>{
                 return <GridButton key={index} soundPlay={soundPlay}/>
             })}
         </Grid>

     </Wrapper>
      
   );    
}

const Wrapper = styled.div``;
const Grid = styled.div`
display: grid;
width: 400px;
height: 400px;
margin: auto;
grid-template-columns: 1fr 1fr;
row-gap: 12px;
column-gap: 12px;
& p {
    border: 1px solid;
}
@media (max-width: 640px){
    width: 300px;
    height: 300px;
}


`;
