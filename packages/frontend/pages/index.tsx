import styles from '../styles/pages/home.module.sass';
import SignInScene from "../components/scenes/signInScene/signInScene.component";

export default function Home(props)  {

  console.log(props);
  return (
    <div className={styles.container}>
      <SignInScene/>
    </div>
  );
};

