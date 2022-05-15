import React, {useState, useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PlaceList from "../components/PlaceList";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';




function UserPlaces(){
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState();
     const [loadedPlaces, setLoadedPlaces] = useState();
     const userId = useParams().userId;


   
     useEffect(() => {
       const sendRequest = async () => {
         setIsLoading(true);
         try {
           const response = await fetch(`https://places-appstream.herokuapp.com/api/places/user/${userId}`);
   
           const responseData = await response.json();
   
           if (!response.ok) {
             throw new Error(responseData.message);
           }
   
           setLoadedPlaces(responseData.place);
         } catch (err) {
           setError(err.message);
         }
         setIsLoading(false);
       };
       sendRequest();
     }, [userId]);
   
     const errorHandler = () => {
       setError(null);
     };

     const placeDeletedHandler = (deletedPlaceId) => {
          setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id != deletedPlaceId))
     };
   


     return (
     <React.Fragment>
          <ErrorModal error={error} onClear={errorHandler} />
          {isLoading && (
               <div className='center'>
                    <LoadingSpinner asOverlay />
               </div>
          )}
          {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
     </React.Fragment>
    
     )
}

export default UserPlaces;

