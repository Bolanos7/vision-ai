import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import { useHistory } from "react-router";
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
  const history = useHistory();

  const goToTermsPage = () => {
    history.push("./Terms");
  };

  return (
    <IonPage className="container">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header-title">Vision AI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1 className="welcome-title">Welcome to the Vision AI App</h1>

        <p className="app-description">
          A Artificial Intelligence Based Near Vision Tester. <br /> Providing
          accurate and reliable at home vision testing.
        </p>
        <Button buttonText="Continue" onClickAction={goToTermsPage} />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle className="footer-title">Version 1.0</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
