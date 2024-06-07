import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./shared.scss"

function Home() {

  useEffect(() => {
    createPlayer();
  })

  const createPlayer = async () => {
    var element = document.getElementById("player");
    const text = await getRandomSGFText();

    var player = new window.WGo.BasicPlayer(element, {
      sgf: text
    });
  }

  const getRandomSGFText = async () => {
    // Seeded random number generator
    function mulberry32(a) {
      return function() {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      }
    }
    // Use today's date as the seed so that everyone gets the same random daily match
    const date = new Date();
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const index = Math.floor(mulberry32(seed)(0) * 70210);
    // Create the request url
    const sgf_url = "https://p-zach.github.io/go-db/games_indexed/" + index + ".sgf";
    console.log("Fetching .sgf from " + sgf_url);
    // Fetch the sgf file from the go game db
    try {
      const response = await fetch(sgf_url)
      if (response.ok) {
        const data = await response.text()
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
          <Card.Header as="h6">About</Card.Header>
          <Card.Body className="px-5">
            <Card.Title className="text-center">Georgia Tech Go Club</Card.Title>
            <Card.Text>
              Welcome to the website of the Georgia Tech Go Club! We are 
              committed to fostering a community around the game of Go, one of 
              the world's oldest board games still played today.
            </Card.Text>
            <Card.Text>
              During the Fall and Spring semesters, we meet weekly to play Go,
              give lectures on strategy, and occasionally hold other events.
            </Card.Text>
            <Card.Text>
              The most up-to-date information about the club, along with
              current meeting dates, times, and locations can be found 
              <span> <a href="https://discord.gg/yCn67Whys7">on our Discord 
              server.</a></span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="">
          <Card.Header as="h6">Check out today's random professional Go game!</Card.Header>
          <Card.Body className="p-3">
            <div id="player">
              Sorry, your browser doesn't support WGo.js.
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Home;
