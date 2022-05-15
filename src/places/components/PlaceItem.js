import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/components/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import './PlaceItem.css';


const PlaceItem = props => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = async () => {
    setShowConfirmModal(true);

  }

  const cancelDeleteHandler = async () => {
    setShowConfirmModal(false);
    
  }

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      const response = await fetch(`http://localhost:5000/api/places/${props.id}`, { method: 'DELETE'} );
      props.onDelete(props.id)
      } catch(err){
  
      }
  }



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container"> 
          <Map center={props.coordinates} />
        </div>
      </Modal>
      <Modal show={showConfirmModal} onCancel={cancelDeleteHandler}  header="Delete" footerClass="place-item__modal-actions" footer={
        <React.Fragment>
          <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
          <Button danger onClick={confirmDeleteHandler}>Delete</Button>
        </React.Fragment>
      }>
        <p>Are you sure you want to delete?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
        {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={`http://localhost:5000/${props.image}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            {auth.userId === props.creatorId && <Button to={`/places/${props.id}`}>EDIT</Button>}
            
            {auth.userId === props.creatorId  && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
