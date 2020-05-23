import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class ClearWarnModal extends Component {
    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    closeModal() {
        this.setState({ open: false });
    }

    openModal() {
        this.setState({ open: true });
    }

    closeAndOpenStep() {
        this.setState({ open: false });
        emitter.emit("openDBConfirm");
    }

    componentDidMount() {
        emitter.on("openDBWarnModal", this.openModal.bind(this));
    }

    render() {
        return (
            <Modal
                show={this.state.open}
                onHide={this.closeModal.bind(this)}
                aria-labelledby="WarnModalHeader"
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="WarnModalHeader">
                        Clear Database
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        Are you sure you want to clear the database? This is
                        irreversible and may take some time!
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        onClick={this.closeAndOpenStep.bind(this)}
                        type="button"
                        className="btn btn-danger"
                    >
                        Clear Database
                    </button>
                    <button
                        onClick={this.closeModal.bind(this)}
                        type="button"
                        className="btn btn-primary"
                    >
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}
