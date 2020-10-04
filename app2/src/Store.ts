class Store {
  public teste: string;

  constructor() {
    console.log('constructor');
    this.teste = 'teste';
  }
}

export default new Store();
