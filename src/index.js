import "./styles/index.scss";
import Main from "./scripts/main";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const game = new Main(ctx, canvas);
game.run();
