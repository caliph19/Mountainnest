import styled from "styled-components";

export const Adventuremain = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`
export const Adventurecenter = styled.div`
width: 85%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Adventureleft = styled.div`
width:45%;
height: 100vh;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;
`
export const Adventureleftheading = styled.div`
width:100%;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
font-family: Squada One;
font-size: 65px;
color: #21282A;
`
export const Adventureleftdetail = styled.div`
width:100%;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
font-family: Poppins;
font-size: 14px;
color: #21282A;

`
export const Adventureleftbuttons = styled.div`
width:60%;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Adventurebutton1 = styled.button`
width:45%;
background-color: #ED6009;
height: 8vh;
display: flex;
align-items: center;
color: #fff;
justify-content: center;
border: none;
border-radius: 15px;
font-family: Poppins;
font-size: 15px;
&:hover {
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
    cursor: pointer;
    background-color: #fff;
    color: #ed6009;
    border: 2px solid #ed6009;
  }

`
export const Adventurebutton2 = styled.button`
width:45%;
background-color: transparent;
height: 8vh;
display: flex;
align-items: center;
color: #ED6009;
justify-content: center;
border: 2px solid #ED6009;
border-radius: 15px;
font-family: Poppins;
font-size: 15px;
&:hover {
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
    cursor: pointer;
    background-color: #ed6009;
    color: #fff;
    border: 2px solid #ed6009;
  }
`




export const Adventureright = styled.div`
width: 55%;
height: 100vh;
display: flex;
align-items: center;
justify-content: end;
img{
    width: 350px;
    height: 450px;
    box-shadow: 1px 0px 11px 5px rgb(0 0 0 / 35%);
    border-radius: 25px;
}
`