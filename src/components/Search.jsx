import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { BsSearch } from "react-icons/bs";
import {
  GetSearchGifs,
  startGetGif,
  CleanSearch,
} from "../redux/actions/index";

function Search({ GetSearchGifs, startGetGif, CleanSearch }) {
  const [inputSearch, setInputSearch] = useState("");
  const [inputAmount, setInputamount] = useState(0);

  useEffect(() => {
    if (!inputAmount) {
      startGetGif();
    }
  });

  function handleChange(e) {
    setInputSearch({
      inputSearch: e.target.value,
    });
    GetSearchGifs(inputSearch.inputSearch);
  }

  function handleChangeAmount(e) {
    setInputamount(e.target.value);
  }

  function handleSubmit(e) {
    if (inputSearch.inputSearch) {
      GetSearchGifs(inputSearch.inputSearch, inputAmount);
    } else {
      startGetGif(inputAmount);
    }
  }

  function handleTopGifs(e) {
    CleanSearch();
    startGetGif(inputAmount);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
        <img src="logo.png" alt="" />
      </a>
      <InputGroup className="mb-3" style={{ width: "500px" }}>
        <FormControl
          placeholder="Search Gifs.."
          aria-label="Search Gifs.."
          aria-describedby="basic-addon2"
          onChange={(e) => handleChange(e)}
        />
        <InputGroup.Append>
          <FormControl
            style={{ width: "100px" }}
            placeholder="Amount.."
            aria-label="Amount.."
            type="number"
            min="1"
            aria-describedby="basic-addon2"
            onChange={(e) => handleChangeAmount(e)}
          />
        </InputGroup.Append>
        <InputGroup.Append>
          <Button onClick={(e) => handleSubmit(e)} variant="outline-primary">
            <BsSearch /> Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {inputSearch.inputSearch && (
        <div
          style={{
            backgroundColor: "#f8f9fa",
            width: "100%",
            textAlign: "center",
            color: "#007bff",
          }}
        >
          {" "}
          <h2>
            Results for the search "<u>{inputSearch.inputSearch}</u>"
          </h2>
        </div>
      )}
      {!inputSearch.inputSearch && (
        <div
          style={{
            backgroundColor: "#f8f9fa",
            width: "100%",
            textAlign: "center",
          }}
        >
          {" "}
          <Button
            variant="link"
            style={{
              color: "#007bff",
              borderColor: "#f8f9fa",
              padding: "0px",
            }}
            onClick={(e) => handleTopGifs(e)}
          >
            <h2>Top Gifs</h2>
          </Button>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetSearchGifs: (name, num) => dispatch(GetSearchGifs(name, num)),
    startGetGif: (num) => dispatch(startGetGif(num)),
    CleanSearch: (num) => dispatch(CleanSearch(num)),
  };
};

export default connect(null, mapDispatchToProps)(Search);
