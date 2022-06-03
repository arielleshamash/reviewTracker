import React from "react";
import { Modal } from "react-bootstrap";
import "./App.css";
import ReviewCard from "./ReviewCard";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewCard />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ReviewModal;
