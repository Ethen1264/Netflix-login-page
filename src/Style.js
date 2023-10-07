import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Header = styled.div`
  background: linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent);
  width: 100%;
  position: absolute;
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
export const NetflixBackgourndImg = styled.div`
  height: 1254px;
  width: 100%q;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/7f9607bc-12d4-4f48-8173-59d880ac19b1/KR-ko-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;
