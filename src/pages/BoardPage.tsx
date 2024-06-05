import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import tenuki, { Game } from '../tenuki/tenuki'
import "../tenuki/tenuki.css"
// import "./BoardPage.scss";
import config from "../go_config.json"

const Board = () => {

  useEffect(() => {
    // Find the game on the page.
    var boardElement = document.querySelector(".tenuki-board");
    var game = new Game({ element: boardElement })

    // Define the function called after every stone is placed.
    game.callbacks.postRender = async function(g: any) {
      // If a stone was just placed and it was a black stone
      if (g.currentState().playedPoint && game.currentState().color === "black") {
        // Get the response move from the API
        var move = await getMove(game.currentState().playedPoint.x, game.currentState().playedPoint.y);

        g.playAt(move.x, move.y);
      }
    };
  })

  const getMove = async (x: number, y: number) => {
    try {
      const response = await fetch(config.API_URL + `/get_response/${y}_${x}`)
      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.error("Failed to fetch response.")
      }
    } catch (e) {
      console.error(`Error fetching response: ${e}`)
    }
  }

  return (
    <Container fluid data-bs-theme="dark" className="bg-body text-white vh-100 p-2">
        <div id="" className="tenuki-board 500px"></div>
    </Container>
  )
}
export default Board
