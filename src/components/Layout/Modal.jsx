import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-slice';
import classes from './Modal.module.css';
import Card from '../UI/Card';

function Modal() {
  const dispatch = useDispatch();
  const { description, title } = useSelector((state) => state.modal);

  const modalCloseHandler = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <div className={classes.backdrop} onClick={modalCloseHandler}>
      <div className={classes.content}>
        <Card>
          <div className={classes.inner}>
            <header className={classes.header}>{title}</header>
            <div>{description}</div>
            <button onClick={modalCloseHandler}>Close</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
