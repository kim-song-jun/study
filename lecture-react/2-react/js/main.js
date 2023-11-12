// 앞으로 실습하면서 코드 양이 많아질텐데, index html에서만 사용하면 관리하기 어려울것이다.
// main.js는 js의 시작점이고, 이후의 코드를 모듈별로 분류해서 파일을 추가할 예정이다.

const element = <h1>Hello world</h1>;
ReactDOM.render(element, document.querySelector("#app"));
