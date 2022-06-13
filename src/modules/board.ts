interface BoardOptions {
  sizeX: number;
  sizeY: number;
}

const defaultOptions = {
  sizeX: 10,
  sizeY: 10,
};

class Board {
  appElement: HTMLElement;
  sizeX: number;
  sizeY: number;

  constructor(
    element: HTMLElement,
    { sizeX, sizeY }: BoardOptions = defaultOptions
  ) {
    this.appElement = element;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  generateMarkup() {
    const grid = Array.from({ length: this.sizeX }, () =>
      Array.from({ length: this.sizeY }, (_, i) => i + 1)
    );
    return `${grid
      .map((row, rowIndex) => {
        return `<div class="grid-row">${row
          .map((_, colIndex) => {
            return `<div data-grid-id="${rowIndex}-${colIndex}" class="grid-col"></div>`;
          })
          .join("")}</div>`;
      })
      .join("")}`;
  }

  draw() {
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");
    boardElement.innerHTML = this.generateMarkup();

    this.appElement.append(boardElement);
  }
}

export default Board;
