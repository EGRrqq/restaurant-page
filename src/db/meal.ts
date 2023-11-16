export default class meal {
  #src: string;
  #saturation: string;
  #initIndex = "0";
  #id = Math.random().toString(36).substring(2);

  constructor(src: string, saturation = 0) {
    this.#src = src;
    this.#saturation = saturation.toString();
  }

  setMealAttributes(parent: HTMLElement) {
    parent.id = this.#id;
    parent.dataset.saturation = this.#saturation;
    parent.dataset.position = this.#initIndex;

    parent.style.background = `url(${this.#src
      }) 100%/100% no-repeat, darkseagreen`;
  }

  get initIndex(): string {
    return this.#initIndex;
  }

  set initIndex(value: number) {
    this.#initIndex = value.toString();
  }
}
