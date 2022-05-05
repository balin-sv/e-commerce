export default class ApiService {
  constructor() {
    this._urlBase = "https://fakestoreapi.com";
  }

  async getAllCategories(url) {
    const res = await fetch(`${this._urlBase}${url}`);
    if (!res.ok) {
      throw new Error(`bad!!!`);
    }
    return res.json();
  }
  async getCategory(url) {
    const res = await fetch(`${this._urlBase}${url}`);
    if (!res.ok) {
      throw new Error(`bad!!!`);
    }
    return await res.json();
  }

  async getProduct(url) {
    const res = await fetch(`${this._urlBase}${url}`);
    if (!res.ok) {
      throw new Error(`bad!!!`);
    }
    return await res.json();
  }
}
