import React from 'react';
import style from './button.module.sass';

type ButtonPops = {
  title: string;
};

export const Button = (props: ButtonPops) => {
  return (
    <div className={style.container}>
      <button>{props.title}</button>
    </div>
  );
};

export default Button;
