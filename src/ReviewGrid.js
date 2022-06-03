import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import ReviewCard from "./ReviewCard";
import ReviewModal from "./ReviewModal";

class ReviewGrid extends Component {
  expandedReviewRef = ({ handleShow }) => {
    this.showModal = handleShow;
  };

  onCardClick = () => {
    this.showModal();
  };
  render() {
    return (
      <div>
        <Container style={{ marginTop: "25px" }}>
          <Row xs={1} sm={2} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => {
              return (
                <>
                  <Col>
                    <ReviewCard onClick={this.onCardClick} />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
        <ReviewModal ref={this.expandedReviewRef} />
      </div>
    );
  }
}

export default ReviewGrid;
