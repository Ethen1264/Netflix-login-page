import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const NetflixBackgourndImg = styled.div`
  height: 1254px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/7f9607bc-12d4-4f48-8173-59d880ac19b1/KR-ko-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
export const Header = styled.div`
  backgournd-color: black;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
  border-bottom: transparent;
  width: 100%;
  top: 0;
  left: 0;
`;
export const Logo = styled.div`
  line-height: 90px;
  margin-left: 3%;
  svg {
    fill: #e50914;
    width: 167px;
    height: 45px;
    vertical-align: middle;
  }
`;
export const BackgorundLoginContainer = styled.div`
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto -236px;
`;
export const BackgorundLogin = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 660px;
  position: relative;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 28px;
    position: absolute;
    top: 40px;
    left: 68px;
  }
`;
export const EmailInputContainer = styled.div`
  background: #333;
  height: 50px;
  width: 315px;
  border-radius: 4px;
  border: 0;
  position: absolute;
  left: 68px;
  top: 132px;

  input {
    width: 270px;
    border: 0;
    background: #333;
    font-size: 16px;
    left: 19px;
    top: 15px;
    z-index: 99;
    position: absolute;
    color: #8c8c8c;
  }
  input:focus {
    outline: none;
    color: #fff;
  }
  div{
    position:absolute;
    left:3px;
    top: 55px;
    color: rgb(232, 124, 3);
    font-size:13px; 
  }
`;
export const PasswordInputContainer = styled.div`
  background: #333;
  height: 50px;
  width: 315px;
  border-radius: 4px;
  border: 0;
  position: absolute;
  left: 68px;
  top: 220px;

  input {
    width: 240px;
    border: 0;
    background: #333;
    font-size: 16px;
    left: 19px;
    top: 15px;
    z-index: 99;
    position: absolute;
    color: #8c8c8c;
  }
  input:focus {
    outline: none;
    color: #fff;
  }
  p {
    top: 3px;
    color: #8c8c8c;
    position: absolute;
    font-size: 14px;
    left: 275px;
  }
  div{
    position:absolute;
    left:3px;
    top: 55px;
    color: rgb(232, 124, 3);
    font-size:13px; 
  }
`;
export const LoginButton = styled.button`
  position: absolute;
  top: 30px;
  background-color: #e50914;
  padding: 13px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: white;
  top: 335px;
  left: 68px;
  width: 315px;
`;
export const LoginCheckBoxContainer = styled.div`
position:absolute;
left:65px;
top: 395px;
width:320px;
height:25px;

a{
  position:absolute;
  top:3px;
  right:2px;
  cursor:pointer;
  color:#b3b3b3;
  font-size:13px;
  &:hover{
    text-decoration : underline
  }
}
span{
  position:absolute;
  top: 3px;
  color:#b3b3b3;
  font-size:13px;
}
input{
  appearance: none;
  border: 0;
  border-radius: 2px;
  width: 15px;
  height: 16px;
  background-color: #737373;
  border:none;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='000' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fff;
}
`
export const SigninContainer = styled.div`
position:absolute;
left:68px;
top: 453px;
width:320px;
height:25px;
span{
  color:#737373;
}
a{
  position:absolute;
  color:#fff;
  cursor:pointer;
  right: 17px;
  &:hover{
    text-decoration : underline
  }
}
`
export const Copyright = styled.div`
position:absolute;
left:68px;
top: 485px;
width:320px;
height:50px;
span{
  font-size:13px;
  color:#8c8c8c;
  line-height: 3%;
}
a{
  position:absolute;
  right:5px;
  top: 24px;
  color:#0071eb;
  font-size:13px;
  cursor:pointer;
  &:hover{
    text-decoration : underline
  }
}
`

// footer
export const FooterContainer = styled.div`
  position:relative;
  margin-top: 45px;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 413px; 
`;
export const FooterServeContainer = styled.div`
  position:relative;
  width: 1000px;
  height: 413px;
  margin:0 auto;
    // background-color: red;
`
export const FirstItem = styled.div`
  position: relative;
  width:1000px;
  height:70px;
  display:flex;
  // background-color: white;
  margin-bottom: 10px;
  .question{
    color: #737373;
    position:absolute;
    top:15px;
  }
  .number{
    left:230px;
    top:30px;
    position:absolute;
    color: #737373;
    cursor:pointer;
    &:hover{
      text-decoration : underline
    }
  }
`
export const SecondItem = styled.div`
  // background-color: red;
  width: 1200px;
  height:90px;
  a{
    display: inline-block;
    width:20%;
    margin-bottom: 16px;
    padding: 0 10px 0 0;
    font-size:13px;
    color: #757575;
    cursor:pointer;
    &:hover{
      text-decoration : underline
    }
  }
`
export const ThirdItem = styled.div`
  width:1000px;
  height: 50px;
  // background-color: red;
  border: ;
  select{
    border-radius: 4px;
    width: 120px;
    height:50px;
    background-color: #000;
    background-image: none;
    border: 1px solid #333;
    color:#737373;
  }
`
export const fourthItem = styled.div`
margin-top: 20px;

.copy-text-block{
  color:grey;
  font-size: .75em;
  line-height: 1.3em;
  text-decoration:none;
}
`