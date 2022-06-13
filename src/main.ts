import "./style.css";
import Board from "./modules/board";

const appElement: HTMLElement = document.querySelector("#app")!;

const board = new Board(appElement);

board.draw();
