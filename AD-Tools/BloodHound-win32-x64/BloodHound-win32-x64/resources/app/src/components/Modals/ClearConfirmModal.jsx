import React, { Component } from "react";
import { clearDatabase } from "utils";

import { Modal } from "react-bootstrap";

export default class ClearConfirmModal extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    closeModalAndClearDB() {
        this.setState({ open: false });
        emitter.emit("clearDB");
        clearDatabase();
    }

    componentDidMount() {
        emitter.on("openDBConfirm", this.openModal.bind(this));
    }

    render() {
        return (
            <Modal
                show={this.state.open}
                onHide={this.closeModal.bind(this)}
                aria-labelledby="ConfirmModalHeader"
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="ConfirmModalHeader">
                        Clear Database
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        Are you ABSOLUTELY sure you want to clear the database?
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        onClick={this.closeModal.bind(this)}
                        type="button"
                        className="btn btn-primary"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={this.closeModalAndClearDB.bind(this)}
                        type="button"
                        className="btn btn-danger"
                    >
                        Clear Database
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}
