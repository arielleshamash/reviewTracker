import React from "react";
import { Card, Stack } from "react-bootstrap";
import "./App.css";
import Reviews from "./reviews.json";

const ReviewCard = ({ onClick, id }) => {
  return (
    <div key={id}>
      {Reviews.map((review) => {
        return (
          <Card border="secondary" onClick={onClick}>
            <Card.Body>
              <Card.Title>{review.place}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {review.rating} stars
              </Card.Subtitle>
              <Card.Text>{review.content}</Card.Text>
              <Stack
                direction="horizontal"
                gap={4}
                style={{ justifyContent: "space-between" }}
              >
                <Card.Text className="text-muted" style={{ marginBottom: "0" }}>
                  {review.author}
                </Card.Text>
                <Card.Text className="text-muted">
                  {new Date(review.published_at).toLocaleDateString()}
                </Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ReviewCard;
