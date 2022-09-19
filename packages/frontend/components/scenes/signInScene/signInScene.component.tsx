import React from 'react';
import style from './signInScene.module.sass';
import { useForm } from 'react-hook-form';
import { Button, InputText } from '../../interactions';
import * as UserContext from 'model/src/contexts/auth/application/authentication.useCase';
type credentials = {
  email: string;
  password: string;
};

function SignInScene() {
  const { handleSubmit, register } = useForm<credentials>();

  const submit = async (data: credentials) => {
     const response = UserContext.signIn(data.email, data.password);
      console.log(response);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>Welcome to The Club!</div>
      <form onSubmit={handleSubmit(submit)} className={style.card}>
        <InputText register={register} name="email" label="username" />
        <InputText register={register} name="password" label="password" />
        <Button title="Login" />
        <p className={style.url}>did you forget your password ? </p>
      </form>
    </div>
  );
}

export default SignInScene;
