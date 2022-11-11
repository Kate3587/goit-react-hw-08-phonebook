import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'reduxe/Authorization/AuthOperetions';

import {
  LoginSection, LoginContainer, LoginForm, LoginLabel,
LoginInput} from './Login.styled';


export const Login = () => {

    const dispatch = useDispatch();
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLabel>
            Password
            <LoginInput
              onChange={hendleChange}
              type="password"
              name="password"
              minLength="8"
              autoComplete="off"
              placeholder="8 characters minimum"
              required
              id="password"
              value={password}
            />
          </LoginLabel>
          <LoginLabel>
            Email
            <LoginInput
              onChange={hendleChange}
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="exampel@gmail.com"
              required
              id="email"
              value={email}
            />
          </LoginLabel>
          <button type="submit">Enter</button>
        </LoginForm>
      </LoginContainer>
    </LoginSection>
  );
};