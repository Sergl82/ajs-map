export default class ErrorRepository {
  constructor() {
    this.errRepository = new Map();
  }

  errRepSet(code, description) {
    this.errRepository.set(code, description);
  }

  translate(code) {
    if (!this.errRepository.get(code)) {
      return 'Unknown error';
    }
    return this.errRepository.get(code);
  }
}
