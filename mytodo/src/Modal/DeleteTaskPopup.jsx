import React, { useState} from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

const DeleteTaskPopup = ({
  handleDelete,
  delshow,
  handleDelClose,
}) => {
  const [apierrors, setApierrors] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false)

  return (
    <>
      <Modal show={delshow} onHide={handleDelClose}>
        {apierrors && <p className="error">{apierrors}</p>}
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This task will be deleted!</Modal.Body>
        <Modal.Footer>
          {!buttonLoading && (
            <Button variant="success" onClick={handleDelete}>
              Delete
            </Button>
          )}
          {buttonLoading && (
            <Button
              variant="success"
              onClick={handleDelete}
              disabled={buttonLoading}
            >
              <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
              />
              Delete
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteTaskPopup;
