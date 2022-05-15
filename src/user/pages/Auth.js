import React, {useState, useContext} from 'react';
import { Formik } from 'formik';
import { AuthContext } from '../../shared/components/context/auth-context';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import './Auth.css';


const Auth = () => {
  const auth = useContext(AuthContext);
    
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
 
    const switchModeHandler = () => {
        setIsLoginMode(prevMode => !prevMode);
    }

    const errorHandler = () => {
      setError(null);
    };
    return(
        <div className='form-control'>
          <Formik 
            initialValues={{name:'', email: '', password: '' }}
            validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
          }
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            }
            return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                
              setSubmitting(false);
              setIsLoading(true);

              if (isLoginMode) {
                try{
                  const response = await fetch('https://places-appstream.herokuapp.com/api/users/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  
                    body: JSON.stringify({
                      email: values.email,
                      password: values.password 
                    })
                  });
                  const responseData = await response.json();
                  // console.log(responseData);
                  if (!response.ok) {
                    throw new Error(responseData.message);
                  }
                  setIsLoading(false);
                  auth.login(responseData.user.id);
                } catch (err) {
                  setIsLoading(false);
                  setError(err.message || 'Something went wrong, please try again.');
                }
              }
              else{
                try{
                  const response = await fetch('https://places-appstream.herokuapp.com/api/users/signup', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: values.name,
                      email: values.email,
                      password: values.password
                    })
                  });
                  const responseData = await response.json();
                  // console.log(responseData);
                  if (!response.ok) {
                    throw new Error(responseData.message);
                  }
                  setIsLoading(false);
                  auth.login(responseData.user.id);
                } catch (err) {
                  setIsLoading(false);
                  setError(err.message || 'Something went wrong, please try again.');
                }
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
            }) => (
              <React.Fragment>
              <ErrorModal error={error} onClear={errorHandler} />
              <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay />}
              <form onSubmit={handleSubmit} className ="place-form">
              <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <p style={{color:"red"}}>{errors.name && touched.name && errors.name}</p>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <p style={{color:"red"}}>{errors.email && touched.email && errors.email}</p>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                 <p style={{color:"red"}}>{errors.password && touched.password && errors.password}</p>
                <button type="submit" disabled={isSubmitting}>
                {isLoginMode ? "LogIn" : "SignUp"}
                </button>
                <button type="reset" style={{backgroundColor:"red", border:"none"}} onClick={switchModeHandler}>Switch to {isLoginMode ? "SignUp" : "Login"}</button>
              </form>
              </Card>
              </React.Fragment>
            )}
            
          </Formik>
          
        </div>
    )
};

export default Auth;


