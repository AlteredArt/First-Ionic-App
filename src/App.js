
import {
  IonButton,
   IonToast,
    IonIcon,
    IonApp,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
  } from '@ionic/react';
import {play as playIcon} from 'ionicons/icons'
import React, {useState} from 'react';


function App() {
    const [showToast, setShowToast] = useState(false);
    const handleClick = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500)
    }
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color='primary' onClick={handleClick}>
        <IonIcon icon={playIcon} slot='end'/>
        CLICK ME
        </IonButton>
        <IonToast isOpen={showToast} message="Hey Ya'll"/>
      </IonContent>
    </IonApp>
  );
}

export default App;
