import { useEffect, useState } from "react";

import Tile from "../components/Tile";

function Grid() {
  const [tiles, setTiles] = useState([]);
  const [emptyIdx, setEmptyIdx] = useState(null); // Stores currently selected index

  useEffect(() => {
    generateRandomArray();
  }, []);

  useEffect(() => {
    if (tiles.length === 0) return;
    let prev = null;
    for (let i = 0; i < 16; i++) {
      if (tiles[i] === "*") continue;
      if (prev && prev > tiles[i]) return;
      prev = tiles[i];
    }
    alert("Success!");
  }, [tiles]);

  return (
    <>
      <div className="grid">
        {tiles.map((val, idx) => {
          return (
            <Tile value={val} clickTile={() => clickTile(idx)} key={val} />
          );
        })}
      </div>
    </>
  );

  // When you click a tile, sets the emptyIdx
  function clickTile(index) {
    // Check if index you clicked on is valid
    if (index === emptyIdx) return; // Clicked on emptyIdx

    if (index === emptyIdx + 1) {
      if (emptyIdx % 4 === 3) return; // Invalid - edge case
      swap(index); // Go Right
    } else if (index === emptyIdx - 1) {
      if (emptyIdx % 4 === 0) return; // Invalid - edge case
      swap(index); // Go Left
    } else if (index === emptyIdx + 4) {
      swap(index); // Go Down
    } else if (index === emptyIdx - 4) {
      swap(index); // Go Up
    }
  }

  function swap(index) {
    let tilesCopy = [...tiles];
    tilesCopy[emptyIdx] = tilesCopy[index];
    tilesCopy[index] = "*";
    setTiles(tilesCopy);
    setEmptyIdx(index);
  }

  function generateRandomArray() {
    // Create an array containing numbers from 1 to 15
    let array = Array.from({ length: 15 }, (_, i) => i + 1);

    // "Fisher-Yates Shuffle"
    // Go backwards...
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get random index on left side...
      // Swap values at indexes
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    const i = Math.floor(Math.random() * 16); // Choose random index for *
    array = [...array.slice(0, i), "*", ...array.slice(i, 16)];
    setEmptyIdx(i);
    setTiles(array);
  }
}

export default Grid;
