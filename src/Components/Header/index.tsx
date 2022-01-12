// #region Global Imports
import { View, Text, Image } from 'react-native'
// #endregion Global Imports

// #region Local Imports
import styles from './style'
// #region Local Imports

export default function BTHeader() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.logoText}>Student Administration Framework</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: '50%' }}
            source={'https://via.placeholder.com/50x50'}
            alt="profile"
          />
          <Text style={{ marginLeft: 10 }}> Adam</Text>
        </View>
      </View>
    </View>
  )
}
