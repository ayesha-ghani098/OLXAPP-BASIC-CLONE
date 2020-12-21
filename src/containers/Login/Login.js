import React, { useEffect } from "react";
import "./Login.css";
import { auth, provider } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/olx.png";
import { Button, Modal, ModalBody } from "react-bootstrap";

function Login(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { user } = userData;
  let history = useHistory();

  // useEffect(() => {
  //     console.log('User', user)
  // }, [user])

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "UPDATED_USER",
          user: result.user,
        });
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-center">
      <Modal.Header closeButton></Modal.Header>
      <ModalBody>
        <div className="login-logo">
          <img src={Logo} />
        </div>
        <div className="login-button">
          <button type="submit" onClick={signIn}>
            Continue with Google
          </button>
        </div>
        <div className="login-h1">
          <h5>We won't share your personal details with anyone</h5>
        </div>
        <div className="login-h2">
          <h6>
            If you continue, you are accepting OLX Terms and Conditions and
            Privacy Policy
          </h6>
        </div>
      </ModalBody>
      <Modal.Footer>
        <Button id="closebtn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
