import React from 'react';
import { useForm } from "react-hook-form";
import { Container, 
         InputGroup ,
         InputLine,
         Input, 
         EIcon,
         Button, 
         Terms, 
         FormError 
       } from './styles';
import ErrorIcon from '../../images/icon-error.svg';


function SignUpForm() {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Submitted: ", data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLine>
            <Input 
              placeholder="First Name" 
              name="firstName" 
              ref={register({
                required: "First Name field cannot be empty"
              })}
              formError={errors.firstName ? 'true' : null}
            />
            {errors.firstName && <EIcon><img src={ErrorIcon}/></EIcon>}
            {errors.firstName && <FormError>{errors.firstName.message}</FormError> }
          </InputLine>
          
          <InputLine>
            <Input 
              placeholder="Last Name" 
              name="lastName" 
              ref={register({
                required: "Last Name field cannot be empty"
              })}
              formError={errors.lastName ? 'true' : null}
            />
            {errors.lastName && <EIcon><img src={ErrorIcon}/></EIcon>}
            {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
          </InputLine>

          <InputLine>
            <Input 
              placeholder="Email Address" 
              name="email" 
              ref={register({
                required: "Email Address field cannot be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Looks like this is not an email"
                }
              })}
              formError={errors.email ? 'true' : null}
            />
            {errors.email && <EIcon><img src={ErrorIcon}/></EIcon>}
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </InputLine>    

          <InputLine>
            <Input 
              placeholder="Password" 
              type="password" 
              name="password" 
              ref={register({
                required: "Password field cannot be empty"
              })}
              formError={errors.password ? 'true' : null}
            />
            {errors.password && <EIcon><img src={ErrorIcon}/></EIcon>}
            {errors.password && <FormError>{errors.password.message}</FormError>}
          </InputLine>
        </InputGroup>
        <Button type="submit">Claim Your Free Trial</Button>
        <Terms>
          <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
        </Terms>
      </form>
    </Container>
  );
}

export default SignUpForm;