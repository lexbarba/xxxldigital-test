/**
 * xxxl digital Api to retrieve products data.
 *
 */
class Api {
  constructor() {
    this._baseUrl = null
  }

  /**
   * Sets _baseUrl.
   *
   * @returns {object} - Api.
   */
  set baseUrl(url) {
    this._baseUrl = url
    return this
  }

  /**
   * Retrieve all products data.
   *
   * @returns {object} - products data.
   */
  retrieveProducts() {
    return fetch(this._baseUrl)
      .then(response => response.json())
      .then(response => response)
  }
}

export default new Api()
