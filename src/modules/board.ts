import shuffle from "../utils/shuffle";
import listToMatrix from "../utils/listToMatrix";

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

  generateGrid() {
    const cardsVariants = Array.from(
      { length: (this.sizeX * this.sizeY) / 2 },
      (_, i) => i + 1
    );
    return cardsVariants.concat(cardsVariants);
  }

  generateMarkup() {
    const gridArray = shuffle<number>(this.generateGrid());
    const grid = listToMatrix<number>(gridArray, this.sizeX);

    return `${grid
      .map((row, rowIndex) => {
        return `<div class="grid-row">${row
          .map((col, colIndex) => {
            return `<div data-grid-id="${rowIndex}-${colIndex}" class="grid-col">${col}</div>`;
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
