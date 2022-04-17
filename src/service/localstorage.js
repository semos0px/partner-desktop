class LocalStorage {
  constructor() {
    this.token_name = "login-token";
  }

  setItem = (ACCESS_TOKEN) => {
    localStorage.setItem(this.token_name, ACCESS_TOKEN);
  };

  getItem = () => {
    return localStorage.getItem(this.token_name);
  };
}

export default LocalStorage;
