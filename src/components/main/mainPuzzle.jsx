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

const imageSets1 = [
  "/assets/puzzlepic/pic1.png",
  "/assets/puzzlepic/pic2.png",
  "/assets/puzzlepic/pic13.png",
  "/assets/puzzlepic/pic14.png",
];

const imageSets2 = [
  "/assets/puzzlepic/pic7.png",
  "/assets/puzzlepic/pic9.png",
  "/assets/puzzlepic/pic15.png",
  "/assets/puzzlepic/pic16.png",
];

const MainPuzzle = () => {
  const [showPuzzle1, setShowPuzzle1] = useState(true);
  const [pic1Index, setPic1Index] = useState(0);
  const [pic2Index, setPic2Index] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPuzzle1((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPic1Index((prevIndex) => (prevIndex + 1) % imageSets1.length);
    }, 5000);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setPic2Index((prevIndex) => (prevIndex + 1) % imageSets2.length);
    }, 5000);

    return () => {
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      {showPuzzle1 ? (
        <Layer>
          <Pic2 style={{ backgroundImage: 'url("/assets/puzzlepic/pic12.png")' }} />
          <Pic1 style={{ backgroundImage: `url(${imageSets1[pic1Index]})` }} />
        </Layer>
      ) : (
        <Layer>
          <Pic1 style={{ backgroundImage: 'url("/assets/puzzlepic/pic17.png")' }} />
          <Pic2 style={{ backgroundImage: `url(${imageSets2[pic2Index]})` }} />
        </Layer>
      )}
    </>
  );
};

export default MainPuzzle;
