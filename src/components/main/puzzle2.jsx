import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Layer = styled.div`
  display: flex;
  width: 1280px;
  justify-content: center;
  margin: 15px auto;
`;

const Pic1 = styled.div`
  width: 400px;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin: 15px auto;
`;

const Pic2 = styled.div`
  width: 820px;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin: 15px auto;
`;

const imageSets2 = [
  "/assets/puzzlepic/pic7.png",
  "/assets/puzzlepic/pic9.png",
  "/assets/puzzlepic/pic15.png",
  "/assets/puzzlepic/pic16.png",
];

const MainPuzzle = () => {
  const [pic2Index, setPic2Index] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setPic2Index((prevIndex) => (prevIndex + 1) % imageSets2.length);
    }, 7000);

    return () => {
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <Layer>
        <Pic1 style={{ backgroundImage: 'url("/assets/puzzlepic/pic17.png")' }} />
        <Pic2 style={{ backgroundImage: `url(${imageSets2[pic2Index]})` }} />
      </Layer>
    </>
  );
};

export default MainPuzzle;
