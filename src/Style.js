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

// footer
export const FooterContainer = styled.div`
  margin-top: 45px;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 413px;
`;
