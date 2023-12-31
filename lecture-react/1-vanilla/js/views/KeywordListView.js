import { delegate, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[KeywordListView]";

export default class KeywordListView extends View {
  constructor(element = qs("#keyword-list-view"), template = new Template()) {
    console.log(tag, "constructor");

    super(element);

    this.template = template;
    this.bindEvents();
  }

  bindEvents() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }

  handleClick(event) {
    const { keyword } = event.target.dataset;
    console.log(tag, "handleClick", keyword);
    this.emit("@click", { keyword });
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();

    super.show();
  }
}

class Template {
  constructor() {}

  getList(data = []) {
    return `
      <ul class="list">
        ${data.map(this._getItem).join("")}
      </ul>    
    `;
  }

  _getItem({ id, keyword }) {
    return `
      <li data-keyword="${keyword}">
        <span class="number">${id}</span>
        ${keyword}
      </li>
    `;
  }

  getEmptyMessage() {
    return `
      <div class="empty-boy">추천 검색어가 없습니다.</div>
    `;
  }
}
