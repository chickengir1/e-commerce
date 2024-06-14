import React from "react";
import {
  CardImage,
  CardDetails,
  CardNumber,
  CardHolder,
  ExpirationDate,
  CardIcons,
  Icon
} from "./styles/CardDisplayStyles";
import cardImage from "/assets/card.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

const formatCardNumber = (number) => {
  const matchedGroups = number.replace(/\s/g, "").match(/.{1,4}/g);
  return matchedGroups ? matchedGroups.join("-") : "";
};

const CardDisplay = ({ cardNumber, cardHolder, expiryMonth, expiryYear }) => {
  return (
    <div style={{ margin: "0 auto", marginBottom: "-1.5rem", zIndex: 1 }}>
      <CardImage>
        <img src={cardImage} alt="Credit Card" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
        <CardIcons>
          <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: '2rem', color: 'white' }} />
          <FontAwesomeIcon icon={faCcVisa} style={{ fontSize: '2rem', color: 'white' }} />
        </CardIcons>
        <CardDetails>
          <CardNumber>{formatCardNumber(cardNumber) || "#### #### #### ####"}</CardNumber>
          <CardHolder>{cardHolder || "NAME"}</CardHolder>
          <ExpirationDate>{`${expiryMonth || "MM"}/${expiryYear || "YY"}`}</ExpirationDate>
        </CardDetails>
      </CardImage>
    </div>
  );
};

export default CardDisplay;
