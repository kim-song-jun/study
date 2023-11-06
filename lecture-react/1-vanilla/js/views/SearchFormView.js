import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  show(keyword = "") {
    this.inputElement.value = keyword;
    this.showResetButton(this.inputElement.value.length > 0);
    super.show();
  }

  bindEvents() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    on(this.element, "submit", (event) => this.handleSubmit(event));
    on(this.resetElement, "click", () => this.handleReset());
  }

  handleKeyup() {
    const { value } = this.inputElement; // 검색어를 가져온다.
    this.showResetButton(value.length > 0); // 검색어의 유무에 따라 reset 버튼을 보여주거나 숨긴다.
    if (value.length <= 0) {
      this.handleReset(); // 검색어가  없으면 @reset 이벤트를 발생(발행)시킨다.
    }
  }

  handleSubmit(event) {
    event.preventDefault(); // submit 이벤트의 기본 동작인 새로고침을 막는다.
    const { value } = this.inputElement; // 검색어를 가져온다.
    console.log(tag, "handleSubmit", value); // 검색어를 출력한다.
    this.emit("@submit", { value }); // @submit 이벤트를 발생(발행)시킨다. 검색어를 전달한다.
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.showResetButton(false); // reset 버튼을 숨긴다.
    this.emit("@reset"); // @reset 이벤트를 발생(발행)시킨다.
  }
}
