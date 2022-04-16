class MapService {
  constructor(callback) {
    this.postcode = new window.daum.Postcode({
      oncomplete: callback,
    });
  }

  open = () => {
    this.postcode.open();
  };
}

export default MapService;
