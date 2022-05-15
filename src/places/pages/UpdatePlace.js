import React, {useState, useContext, useEffect} from 'react';
import { Formik } from 'formik';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './NewPlace.css';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';



const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedPlace, setLoadedPlace] = useState();
  const history = useHistory();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://places-appstream.herokuapp.com/api/places/${placeId}`);

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedPlace(responseData.place);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [placeId]);

  const errorHandler = () => {
    setError(null);
  };



  if (!loadedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <div className='form-control'>
    <Formik 
      initialValues={{ title: loadedPlace.title , description: loadedPlace.description }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        } 
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        
          setSubmitting(false);
          setIsLoading(true);
          try{
            const response = await fetch(`https://places-appstream.herokuapp.com/api/places/${placeId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: values.title,
                description: values.description
              })
            });
            const responseData = await response.json();
            // console.log(responseData);
            if (!response.ok) {
              throw new Error(responseData.message);
            }
            setIsLoading(false);
            history.push('/');
          } catch (err) {
            setIsLoading(false);
            setError(err.message || 'Something went wrong, please try again.');
          }
        
      

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <React.Fragment>
          <ErrorModal error={error} onClear={errorHandler} />
        <form onSubmit={handleSubmit} className ="place-form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            rows={3}
            value={values.description}
          />
          <button type="submit" disabled={isSubmitting}>
            Update Place
          </button>
        </form>
        </React.Fragment>
      )}
    </Formik>
  </div>
  );
};

export default UpdatePlace;
