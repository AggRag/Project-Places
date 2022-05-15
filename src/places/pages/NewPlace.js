import React, {useState, useContext, useCallback, useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import { Formik } from 'formik';
import './NewPlace.css';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/components/context/auth-context';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [initialvalue, setValue] = useState(null);

  
  const inputHandler = (id, value, isValid) => {
    setValue(value);
  }



  const switchModeHandler = () => {
      setIsLoginMode(prevMode => !prevMode);
  }

  const errorHandler = () => {
    setError(null);
  };

  const history = useHistory();
  return (
  <div className='form-control'>
    <Formik 
      initialValues={{ title: '', description: '', address:'', image: { value: initialvalue} }}
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
                const response = await fetch('https://places-appstream.herokuapp.com/api/places', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    title: values.title,
                    description: values.description,
                    address: values.address,
                    creator: auth.userId,
                    image: values.image.value
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

              // auth.login();
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
         {isLoading && <LoadingSpinner asOverlay />}
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <p style={{color:"red"}}>{errors.title && touched.title && errors.title}</p>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            rows={3}
            value={values.description}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          <ImageUpload id="image" onInput={inputHandler} />
          <button type="submit" disabled={isSubmitting}>
            Add Place
          </button>
        </form>
        </React.Fragment>
      )}
    </Formik>
  </div>
  
  );
};

export default NewPlace;
 