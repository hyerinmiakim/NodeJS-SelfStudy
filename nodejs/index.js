// 누군가 접근하면 가장 먼저 접근할 js파일
const express = require('express'); //express 설치
const path = require('path');   // 경로 접근 방법 제어
const app = express();
const port = 3000;

/* __dirname: express가 가지고 있는 전역변수로, 현재 경로 + /views로 view 폴더 설정 */
app.set('views', __dirname + '/views'); 
/*
    ejs를 활용하여 백 서버에 html파일을 미리 보내줌 (rendering)
    동일 기능: res.send(home.html);
*/
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/* 
    공통적으로 사용하는 공ㅋ통 미들웨어! 클라이언트 접근 가능
    use(): 해당 메소드가 호출되는 순간, 파라미터에 있는 명령이 실행되고, 
    midware로 사용하겠다. 
    정적 파일에 대한 접근 : 접근할 루트 디렉토리 지정
    모든 접그에 대한 미들웨어를 이걸로 설정
*/
app.use(express.static(__dirname + '/public'));

/* 
    서버 자체 함수 (부분 미들웨어의 역할을 하는). 클라이언트 접근x
    req: 사용자의 각 종 요청, res: 응답
*/
const checkLogingMiddleware = (req, res, next) => {
    const users = req.users;    
    if(users.hasSession()) next();
    else res.redirect('/login');
}

//app.use('router/router1'); // 모듈화 : 소스 코드 분리

/* 
    Router 기능 
*/
app.get('/', (req, res) => {    //app.get('/', function(request, reponse)
    console.log('Home !');
    return res.render('home.html');
});

app.get('/welcome', (req, res) => {
    console.log('Welcome!');
    return res.render('welcome.html')
});

/* 
    Error 처리
    위 조건에 해당하지 않는 모든 접근에 대해 처리
*/
app.get('*', (req, res) => {
    res.status(404).send('not found')
})

app.listen(3000, () => console.log(`Running the server on port ${port}`))
