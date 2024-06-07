import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import tenuki, { Game } from '../tenuki/tenuki'
import "../tenuki/tenuki.css"
import config from "../go_config.json"
import Card from 'react-bootstrap/Card';
import "./shared.scss"

const Board = () => {
  var game = null;

  useEffect(() => {
    // Find the game on the page.
    if (game === null) {
      var boardElement = document.querySelector(".tenuki-board");
      boardElement.innerHTML = "";
      game = new Game({ element: boardElement })

      // Define the function called after every stone is placed.
      game.callbacks.postRender = async function(g) {
        // If a stone was just placed and it was a black stone
        // if (g.currentState().playedPoint && game.currentState().color === "black") {
        //   // Get the response move from the API
        //   var move = await getMove(game.currentState().playedPoint.x, game.currentState().playedPoint.y);
        //   g.playAt(move.x, move.y);
        // }
        let quitCounter = 0;
        while (g.currentState().playedPoint && game.currentState().color === "black" && quitCounter < 1000) {
          g.playAt(Math.trunc(Math.random()*19), Math.trunc(Math.random()*19));
          quitCounter++;
        }
      };
    }
  })

  const getMove = async (x, y) => {
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
    <Container fluid data-bs-theme="dark" className="bg-body text-white p-2 min-vh-100">
      <div className="go-card mx-auto">
        <Card className="mb-4">
          <Card.Header as="h6">Play</Card.Header>
          <Card.Body className="px-5">
            <Card.Title className="text-center">Work in progress</Card.Title>
            <Card.Text>
              We are aiming to create a Go AI competition, where players can submit 
              their own Go AI agents. These agents would play against each other and
              each agent's relative rank would be displayed on a leaderboard. Additionally,
              players would be able to play games against any of the agents.
            </Card.Text>
            <Card.Text>
              If you are interested in helping with the development of the competition,
              please join the Discord server and reach out to an officer or come to any
              of our meetings.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header as="h6">In the meantime, play against a random opponent!</Card.Header>
          <Card.Body className="px-5">
            <div id="" className="tenuki-board mx-auto" data-include-coordinates="true"></div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}
export default Board
