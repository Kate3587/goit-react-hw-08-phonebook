import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'reduxe/Authorization/AuthOperetions';
import {
  RegistrContainer, RegistrWrapp, RegistrForm, RegistrLabel,
  RegistrInput, RegistrBtn
} from './Registr.styled';


export const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeOn = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <RegistrContainer>
      <RegistrWrapp>
        <RegistrForm onSubmit={handleSubmit}>
          <RegistrLabel>
            Name
            <RegistrInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Your Name"
              required
              id="name"
              value={name}
              onChange={handleChangeOn}
            />
          </RegistrLabel>
          <RegistrLabel>
            Email
            <RegistrInput
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="exampel@gmail.com"
              required
              id="email"
              value={email}
              onChange={handleChangeOn}
            />
          </RegistrLabel>
          <RegistrLabel>
            Password
            <RegistrInput
              type="password"
              name="password"
              minLength="5"
              placeholder="5 characters minimum"
              required
              id="password"
              value={password}
              onChange={handleChangeOn}
            />
          </RegistrLabel>
          <RegistrBtn type="submit">
            Register
          </RegistrBtn>
        </RegistrForm>
      </RegistrWrapp>
    </RegistrContainer>
  );
};