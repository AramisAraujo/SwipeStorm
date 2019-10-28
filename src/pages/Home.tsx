import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCheckbox, IonItem, IonLabel, IonNote, IonBadge } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Swipe Storm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Aramis</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
        </IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
