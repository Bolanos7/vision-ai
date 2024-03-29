import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/home/Home";
import Terms from "./pages/terms/Terms";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import TestConfig from "./pages/testConfig/TestConfig";
import Test from "./pages/Test";
import Sample from "./components/PreTest";
import SampleTest from "./components/PreTest";
import PreTest from "./components/PreTest";
import CameraPage from "./pages/cameraPage/CameraPage";
import LetterTest from "./pages/letterTest/LetterTest";
import ShapeTest from "./pages/shapeTest/ShapeTest";
import Results from "./pages/results/Results";
import VoiceTest from "./pages/VoiceTest";
import DistanceTest from "./pages/DistanceTest";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Terms" component={Terms} exact />
        <Route path="/TestConfig" component={TestConfig} exact />
        <Route path="/Test" component={Test} exact />
        <Route path="/CameraPage" component={CameraPage} exact />
        <Route path="/LetterTest" component={LetterTest} exact />
        <Route path="/ShapeTest" component={ShapeTest} exact />
        <Route path="/Results" component={Results} exact />
        <Route path="/DistanceTest" component={DistanceTest} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
