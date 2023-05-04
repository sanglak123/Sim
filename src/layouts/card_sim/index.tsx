import { interFade_Sim } from "@/sp/interfade";
import React from "react";
import { Card, Button } from "react-bootstrap";

interface Card_Sim {
  sim: interFade_Sim;
}
const Card_Sim = ({ sim }: Card_Sim) => {
  return (
    <Card className="ms-2 me-2">
      <Card.Img variant="top" src={sim.Production?.avatar} />
      <Card.Body>
        <Card.Title>{sim.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Tổng: {sim.expiry} Ngày</li>
            <li>Dung lượng: {sim.size_data}/Ngày</li>
            <li>Vùng: {sim.limit}</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <div className="card_btn">
        <Button variant="primary">
          <span className="material-symbols-outlined">favorite</span>
          <div className="tip">Add list</div>
        </Button>
        <Button variant="primary">
          <span className="material-symbols-outlined">add_shopping_cart</span>
          <div className="tip">Add store</div>
        </Button>
        <Button variant="primary">
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
          <div className="tip">Buy now</div>
        </Button>
      </div>
    </Card>
  );
};

export default Card_Sim;
