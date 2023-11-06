import { TabType } from "./views/TabView.js";

const tag = "[Store]";

export default class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];

    this.selectedTab = TabType.KEYWORD;
  }
  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
    this.addHistory(this.searchKeyword);
  }

  // 추천 검색어 목록을 storage에서 가져온다.
  getKeywordList() {
    return this.storage.keywordData;
  }

  // 검색 이력 목록을 storage에서 가져온다.
  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  getHistoryListReverse() {
    return this.storage.historyData.sort(this._sortHistoryReverse);
  }

  // 검색 이력을 추가한다.
  addHistory(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) return;

    // 이미 검색 이력에 있는 검색어라면 삭제한다.
    this.removeHistory(keyword);

    // 검색 이력을 추가한다.
    const id = this.storage.historyData.length + 1;
    const date = new Date();
    this.storage.historyData.push({ id, keyword, date });
  }

  // set history index
  initHistoryIndex() {
    const data = this.getHistoryListReverse();

    data.forEach((history, index) => {
      history.id = index + 1;
    });
    this.storage.historyData = data;
  }

  // 검색 이력을 삭제한다.
  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
    this.initHistoryIndex();
  }

  _sortHistory(history1, history2) {
    return history2.date - history1.date;
  }

  _sortHistoryReverse(history1, history2) {
    return history1.date - history2.date;
  }
}
