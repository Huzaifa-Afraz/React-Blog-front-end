import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AlertModal(props) {
  const {title, body,Ref, click}=props
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false); click(false)}
  const handleShow = () => setShow(true);
  const handleDelete=()=>{setShow(false); click(true)}
  return (
    <>
      <span style={{display:"none"}} ref={Ref} onClick={handleShow}>
        
      </span>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
