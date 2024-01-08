# Portfolio
프론트엔드 신입 개발자 김우주의 포트폴리오 입니다.

React를 이용해 만든 포트폴리오입니다. UI/UX는 [awwwards](https://www.awwwards.com/)를 참고하였습니다.
반응형웹으로 만들어져 모든 환경에서 사용가능합니다.

[사이트바로가기](http://woojoo-portfolio.kro.kr)

## 작업순서
1. 리액트 설치 및 필요한 라이브러리 설치
- `npx create-react-app .`
- `npm install react-router-dom`
- `npm install gsap`
- `npm i split-type`
- `npm i @studio-freight/lenis`
- `npm i react-icons`

2. Vite로 작업한 코드 React로 옮기기

3. server와 client로 나누어서 각각 설치하기
- client   
`npm install sass`   
`npm install react-bootstrap bootstrap`   
`npm install react-router-dom`   
`npm install axios`   
`npm install http-proxy-middleware`   
`npm install firebase`   
`npm install react-redux`   
`npm install @reduxjs/toolkit`   
`npm install gsap`   
`npm install framer-motion`  

- server   
`npm init -y;`      
`npm install express --save;   `  
`npm install nodemon --save;   `  
`npm install path --save;   `
`npm install mongoose --save;   `

## React 사용
- React란?
React는 페이스북에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 구축하기 위한 도구입니다.     
React는 단일 페이지 애플리케이션(SPA) 및 웹 애플리케이션의 UI(User Interface)를 만들기 위해 설계되었으며,    
UI의 각 구성 요소를 쉽게 만들고 관리할 수 있도록 도와줍니다.   

## Express 사용
- Express란?
Express.js는 Node.js 웹 애플리케이션을 위한 강력한 웹 프레임워크입니다.   
웹 애플리케이션의 서버 측 로직을 구축하는 데 도움이 되며,   
HTTP 요청에 대한 응답을 처리하고 경로 및 미들웨어를 관리하는 데 사용됩니다.   

- 실제 컴퓨터 두 대가 없기때문에, express.js를 사용하여 server와 client파일을 분할해   
마치 두 대의 컴퓨터를 사용하는것 처럼 server을 구현했습니다.   

## Node.js 사용
- Node.js란?
Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경입니다.   
서버 측 애플리케이션을 구축하기 위한 환경을 제공하며, JavaScript를 사용하여 서버 사이드 코드를 작성할 수 있도록 해줍니다.   

- Node.js를 이용해 회원가입/로그인, 댓글 기능 등을 구현할 수 있습니다.

## mongoDB 사용
- mongoDB란?
MongoDB는 NoSQL 데이터베이스 시스템 중 하나로, 문서 지향적이고 확장성이 뛰어난 데이터베이스입니다. 

- mongodDB를 이용해 코멘트, 유저 정보 등을 저장할 수 있습니다.

## Firebase 사용
- Firebase란?
Firebase는 Google이 제공하는 모바일 및 웹 애플리케이션 개발 플랫폼으로,    
백엔드 서비스와 클라우드 서비스를 제공하는 통합적인 솔루션입니다.    

- Firebase를 사용하면 회원가입/로그인 정보 저장을 쉽게 할 수 있습니다.

## Redux 사용
- Redux란?
Redux는 JavaScript 애플리케이션을 위한 상태 관리 라이브러리입니다.    
React와 함께 주로 사용되지만, React에 국한되지 않고 다른 JavaScript   
프레임워크 또는 라이브러리와도 함께 사용할 수 있습니다.

- Redux를 사용하면 복잡한 상태 관리를 간소화하고, 상태의 예측 가능성을 높여주며, 애플리케이션의 테스트와 유지 보수를 용이하게 할 수 있습니다.

## Framer motion & gsap 사용
- Frmaer motion이란?
Framer Motion은 React 애니메이션을 간편하게 구현할 수 있도록 도와주는 오픈 소스 라이브러리입니다. 이 라이브러리는 React 애플리케이션에서 풍부하고 부드러운 모션을 쉽게 추가할 수 있도록 설계되었습니다. Framer Motion은 애니메이션 요소를 구성하고 제어하는 데 사용됩니다.

- gsap란?
GSAP(그린 소켓 애니메이션 플랫폼)은 JavaScript로 작성된 애니메이션 라이브러리 중 하나입니다. GreenSock Animation Platform의 약자로, 웹 애니메이션을 만들고 제어하기 위한 강력하고 유연한 라이브러리입니다. 

## 트러블슈팅
<details>
    <summary>GSAP 애니메이션 재실행 문제</summary>
    - 문제 원인   

    useEffect(() => {
        appear();
        sliderAppear();
    }, [props]);
    
    props의 상태가 변경되면 useEffect 훅이 리렌더링 되기 때문에 gsap함수가 계속 재실행되었다.

    - 문제 해결

    const { appear } = props;

    useEffect(() => {
        appear();
    }, [appear]);

    useEffect(() => {
        sliderAppear();
    }, []);
    
    useEffect의 의존성 배열을 props 자체가 아닌 props내부의 특정 속성에 의존하도록 변경하면 해결된다.
</details>
<br/>
<details>
    <summary>failed to push some refs to 오류</summary>
    - 문제 원인
    이는 원격저장소에 내 로컬에는 없는 파일이 있을 때 내 파일을 push하려고하면 발생하는 오류이다.

    - 문제 해결
    먼저 원격저장소에서 pull한 뒤, 다시 내가 작업한 것을 push하면 된다.
</details>
<br/>
<details>
    <summary>로그인/회원가입</summary>
    <p>
        기능을 구현하는것은 크게 문제되는 점이 없었지만 배포 후 회원가입이 되지않아서 몇 시간동안 고생했습니다.<br/>
    </p>

    - 문제 원인
    mongoDB(데이터베이스)에서 Network Access에서 내 컴퓨터의 IP주소만 허용 가능하게 설정함

    - 문제 해결
    허용 주소를 0.0.0.0/0(모두 접속가능)으로 설정하면 해결
        

</details>
<br/>
<details>
    <summary>heroku 배포 문제</summary>
    <p>
        heroku 배포 단계를 제대로 따라했는데 좀처럼 되지 않아서 애를 먹었지만,<br/>
        <code>heroku logs --tail</code> 명령어를 사용하여 하나씩 에러를 수정해나갔습니다.<br/>
    </p>

    - 문제 원인
    경로 설정 문제

    - 문제 해결
    server파일의 옳바른 경로 설정
</details>


## 사이트
데이터베이스 - [mongoDB](https://www.mongodb.com/ko-kr/cloud/atlas/lp/try4)   
로그인/회원가입 - [firebase](https://firebase.google.com/?hl=ko)   
도메인 - [내도메인](https://xn--220b31d95hq8o.xn--3e0b707e/)   
배포 - [heroku](www.heroku.com)

