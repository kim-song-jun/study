// 앞으로 실습하면서 코드 양이 많아질텐데, index html에서만 사용하면 관리하기 어려울것이다.
// main.js는 js의 시작점이고, 이후의 코드를 모듈별로 분류해서 파일을 추가할 예정이다.

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword: searchKeyword,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("[submit]: handleSubmit", this.state.searchKeyword);
  }

  handleReset() {
    // setState는 항상 비동기로 동작함.
    // 이 함수를 호출한다 하더라도, 바로 state가 반영되지 않음.
    // 값이 아니라 함수도 전달 할 수 있음
    this.setState(() => {
      return { searchKeyword: "" }
    }, () => {
      console.log("setState callback", this.state.searchKeyword)
    })
    
  }

  render() {
    // 이 함수는 react element를 return해야함
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form id="search-form-view" 
            onSubmit={(e) => this.handleSubmit(e)}
            onReset={()=> this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(e) => this.handleChangeInput(e)}
            />
            {/* 리엑트에서 조건부 렌더링 하는 방식은 3가지 */}
            {/* 1. 엘리먼트 변수를 사용하는 방식, 
                2. 삼항연산자, 
                3. 그리고 && 사용하는 방법 */}
            {/* js는 첫번째 조건이 참이 되어야 두번째 조건을 실행함... */}
            {this.state.searchKeyword.length > 0 && (
              <button
                type="reset"
                className="btn-reset"
              ></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

// 컴포넌트가 될려면 객체화가 되어야함
ReactDOM.render(<App />, document.querySelector("#app"));
