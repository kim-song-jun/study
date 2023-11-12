// 앞으로 실습하면서 코드 양이 많아질텐데, index html에서만 사용하면 관리하기 어려울것이다.
// main.js는 js의 시작점이고, 이후의 코드를 모듈별로 분류해서 파일을 추가할 예정이다.

class App extends React.Component {
  render() {
    // 이 함수는 react element를 return해야함
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form id="search-form-view">
            <input type="text" placeholder="검색어를 입력하세요" autoFocus />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
      </>
    );
  }
}

// 컴포넌트가 될려면 객체화가 되어야함
ReactDOM.render(<App />, document.querySelector("#app"));
