import api from '../api/index'

/**
 * Abstraction of business logic.
 *
 */
class Logic {
  
  constructor({ api }) {
    this._api = api
  }

  /**
   * Retrieve all products data.
   *
   * @returns {object} - products data.
   */
  retrieveProducts(){
    return this._api.retrieveProducts()
  }
}

export default new Logic({ api })