import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const CommunityPartners = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPartners}>
        <Image
          source={require(`../../assets/images/CommunityPartners/bc-rehab.jpg`)}
          style={styles.bcRehab}
        />
        <Image
          source={require(`../../assets/images/CommunityPartners/pos-abilities.png`)}
          style={styles.posAbilities}
        />
        <Image
          source={require(`../../assets/images/CommunityPartners/hub.jpg`)}
          style={styles.hub}
        />
      </View>
    </View>
  );
};

export default CommunityPartners;
