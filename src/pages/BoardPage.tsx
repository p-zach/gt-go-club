import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import tenuki, { Game } from '../tenuki/tenuki'
import "../tenuki/tenuki.css"
import "./BoardPage.scss";

const Board = () => {
  // const [ game, setGame ] = useState(null);

  useEffect(() => {
    var boardElement = document.querySelector(".tenuki-board");
    var game = new Game({ element: boardElement })
    game.callbacks.postRender = function(g: any) {
      if (g.currentState().playedPoint && game.currentState().color === "black") {
        // console.log(game.currentState().color + " played " + game.currentState().playedPoint.y + "," + game.currentState().playedPoint.x);
        while (game.currentState().color === "black") {
          g.playAt(Math.trunc(Math.random()*19), Math.trunc(Math.random()*19));
        }
      }
    };
  })

  return (
    <Container fluid data-bs-theme="dark" className="bg-body text-white vh-100 p-2">
        <div id="" className="tenuki-board 500px"></div>
    </Container>
  )
}
export default Board
