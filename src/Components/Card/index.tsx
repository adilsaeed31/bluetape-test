// #region Global Imports
import { View, Text } from 'react-native'
// #region endGlobal Imports

export default function BTCard({ title, children, ...rest }: any) {
  const { active } = rest

  return (
    <View
      style={{
        width: 400,
        padding: 40,
        marginRight: 10,
        justifyContent: 'center',
        backgroundColor: active ? 'white' : '#f1f1f1',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: active ? 'skyblue' : '#999',
        }}
      >
        {title}
      </Text>
      <Text style={{ color: active ? '#888' : '#ccc', marginTop: 5 }}>
        {children}
      </Text>
    </View>
  )
}
