import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function Home({ all_gifs, searching_gifs }) {
  const [pantalla, setPantalla] = useState(window.screen.width);
  let columnas;
  function resize() {
    setPantalla(window.innerWidth);
  }
  window.onresize = resize;

  if (pantalla <= 600) {
    columnas = 2;
  }
  if (pantalla > 600 && pantalla < 900) {
    columnas = 3;
  }
  if (pantalla >= 900) {
    columnas = 5;
  }

  if (searching_gifs.data && searching_gifs.data.length !== 0) {
    return (
      <CardColumns
        style={{
          columnCount: columnas,
          padding: "10px 10px 0px 10px",
          backgroundColor: "black",
        }}
      >
        {searching_gifs.data &&
          searching_gifs.data.map((ele, i) => {
            return (
              <Card key={i}>
                <Card.Img
                  style={{ height: "250px" }}
                  variant="top"
                  src={
                    "https://media3.giphy.com/media/" +
                    ele.id +
                    "/200.webp?cid=95a0333e1iz2l2n7nmwkqfx8vg0mmnaqhnn2vaaxyfttr1gg&rid=200.webp"
                  }
                />
              </Card>
            );
          })}
      </CardColumns>
    );
  } else {
    return (
      <CardColumns
        style={{
          columnCount: columnas,
          padding: "10px 10px 0px 10px",
          backgroundColor: "black",
        }}
      >
        {all_gifs.data &&
          all_gifs.data.map((ele, i) => {
            return (
              <Card key={i}>
                <Card.Img
                  style={{ height: "250px" }}
                  variant="top"
                  src={
                    "https://media3.giphy.com/media/" +
                    ele.id +
                    "/200.webp?cid=95a0333e1iz2l2n7nmwkqfx8vg0mmnaqhnn2vaaxyfttr1gg&rid=200.webp"
                  }
                />
              </Card>
            );
          })}
      </CardColumns>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    all_gifs: state.all_gifs,
    searching_gifs: state.searching_gifs,
  };
};

export default connect(mapStateToProps)(Home);
