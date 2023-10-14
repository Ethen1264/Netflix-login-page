import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import * as S from './Style';

const user = {
  email: 'test@gmail.com',
  pw: 'test1234!!!',
};
const checkPw = true;
function App() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [changePw, setChangePw] = useState('password');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else setEmailValid(false);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) setPwValid(true);
    else setPwValid(false);
  };
  const onClickConfirmButton = (e) => {
    if (email === user.email && pw === user.pw) alert('로그인 되었습니다');
    else alert('등록되지 않는 회원입니다');
  };
  const checkPassword = (e) =>{
    if(changePw === 'password')
    {
      setChangePw('text');
    }
    else 
    setChangePw('password');
  }

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);
  return (
    <>
      {/* web css 초기화 */}
      <GlobalStyle />
      {/* 배경 설정 */}
      <S.Container>
        <S.NetflixBackgourndImg>
          {/* 헤더 설정 */}
          <S.Header>
            <S.Logo>
              <a href="/" class="logo">
                <svg viewBox="0 0 111 30" data-uia="netflix-logo" class="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false">
                  <g id="netflix-logo">
                    <path
                      d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                      id="Fill-14"
                    ></path>
                  </g>
                </svg>
              </a>
            </S.Logo>
          </S.Header>
          {/* 로그인 컨테이너 */}
          <S.BackgorundLoginContainer>
            <S.BackgorundLogin>
              <h1>로그인</h1>
              <S.EmailInputContainer>
                <input type="text" value={email} placeholder="이메일 주소 또는 전화번호" onChange={handleEmail}></input>
                <div class="errorEmail">{!emailValid && email.length > 0 && <div>정확한 이메일 주소나 전화번호를 입력하세요.</div>}</div>
              </S.EmailInputContainer>
              <S.PasswordInputContainer>
                <input value={pw} placeholder="비밀번호" type={changePw} onChange={handlePw} />
                <p onClick={checkPassword}>표시</p>
                <div>{!pwValid && pw.length > 0 && <div class="errorPw">비밀번호는 4~60자 사이여야 합니다.</div>}</div>
              </S.PasswordInputContainer>
              <S.LoginButton onClick={onClickConfirmButton} disabled={notAllow}>
                로그인
              </S.LoginButton>
              <S.LoginCheckBoxContainer>
                <input type="checkbox" />
                <span>로그인 정보 저장</span>
                <a>도움이 필요하신가요?</a>
              </S.LoginCheckBoxContainer>
              <S.SigninContainer>
                <span>Netflix 회원이 아닌가요?</span>
                <a>지금 가입하세요.</a>
              </S.SigninContainer>
              <S.Copyright>
                <span>
                  이 페이지는 Google reCAPTCHA의 보호를 받아
                  <br />
                  사용자가 로봇이 아님을 확인합니다.
                </span>
                <a>자세히 알아보기.</a>
              </S.Copyright>
            </S.BackgorundLogin>
          </S.BackgorundLoginContainer>

          {/* footer */}
          <S.FooterContainer>
            <S.FooterServeContainer>
              <S.FirstItem>
                <p className="question">질문이 있으신가요? 문의 전화: </p>
                <a className="number">080-001-9587</a>
              </S.FirstItem>
              <S.SecondItem>
                <a className="first">자주 묻는 질문</a>
                <a className="second">고객 센터</a>
                <a className="third">이용 약관</a>
                <a className="fourth">개인정보 처리방침</a>
                <a className="fifth">쿠키 설정</a>
                <a className="sixth">회사 정보</a>
              </S.SecondItem>
              <S.ThirdItem>
                <select>
                  <option>한국어</option>
                  <option>English</option>
                </select>
              </S.ThirdItem>
              <S.fourthItem>
                <div class="copy-text-block">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</div>
                <div class="copy-text-block">대표: 레지널드 숀 톰프슨</div>
                <div class="copy-text-block">이메일 주소: korea@netflix.com</div>
                <div class="copy-text-block">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                <div class="copy-text-block">이메일 주소: korea@netflix.com</div>
                <div class="copy-text-block">사업자등록번호: 165-87-00119</div>
                <div class="copy-text-block">클라우드 호스팅: Amazon Web Services Inc.</div>
                <div class="copy-text-block">
                  <a class="copy-text-block" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
                    공정거래위원회 웹사이트
                  </a>
                </div>
              </S.fourthItem>
            </S.FooterServeContainer>
          </S.FooterContainer>
        </S.NetflixBackgourndImg>
      </S.Container>
    </>
  );
}
export default App;
