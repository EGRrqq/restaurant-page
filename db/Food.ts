export default class Food {
  #id = Math.random().toString(36).substring(2);
  #src: string;
  #saturation: number;

  constructor(src = "", saturation = 0) {
    this.#src = src;
    this.#saturation = saturation;
  }

  get getId() {
    return this.#id;
  }

  get getSrc() {
    return this.#src;
  }

  get getSaturation() {
    return this.#saturation;
  }
}
