export default class meal {
  #src: string;
  #saturation: string;
  #positionIndex = "0";
  #id = Math.random().toString(36).substring(2);

  constructor(src: string, saturation = 0) {
    this.#src = src;
    this.#saturation = saturation.toString();
  }

  setMealAttributes(parent: HTMLElement) {
    parent.id = this.#id;
    parent.dataset.saturation = this.#saturation;
    parent.dataset.position = this.#positionIndex;
    parent.dataset.type = "food";

    parent.style.background = `url(${
      this.#src
    }) 100%/100% no-repeat, darkseagreen`;
  }

  get positionIndex(): string {
    return this.#positionIndex;
  }

  set positionIndex(value: number) {
    this.#positionIndex = value.toString();
  }
}
