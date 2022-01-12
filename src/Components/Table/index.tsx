// #region Global Imports
import { View, Text, Image } from 'react-native'
// #endregion Global Imports

// #region Local Imports
import { BTCard, BTButton, BTInput, BTCheckBox } from '../index'
import { Data } from '../../Interface'
import styles from './style'
// #endregion Local Imports

export default function BTTable({
  data,
  handleAdd,
  deleteStudent,
  filterStudent,
  updateStudent,
}: {
  data: Data | any
  handleAdd: Function
  deleteStudent: Function
  filterStudent: Function
  updateStudent: Function
}) {
  return (
    <View style={styles.box}>
      <View style={styles.cardContainer}>
        <BTCard active title="students">
          {data?.length} students registered
        </BTCard>

        <BTCard title="Study Groups">
          6 study groups with {data?.length} students
        </BTCard>
      </View>

      <View style={styles.leftPanel}>
        <View style={styles.leftPanelInner}>
          <Text>Search for Name</Text>
          <BTInput
            onChangeText={(name: string) => filterStudent(name)}
            style={styles.input}
          />
        </View>

        <View style={styles.rightPanel}>
          <View style={styles.rightPanelinner}>
            <Text style={styles.mr20}>{data?.length} students</Text>

            <View style={styles.mr10}>
              <BTButton onPress={handleAdd} title="Add Student" />
            </View>

            <View style={styles.mr10}>
              <BTButton
                style={styles.mr20}
                onPress={(id: number) => deleteStudent(Math.random())}
                title="Remove Student"
              />
            </View>

            <View>
              <BTButton
                onPress={(name: string) => updateStudent(0)}
                title="Update Student"
              />
            </View>
          </View>

          <View style={styles.tableContainer}>
            <View style={{ flex: 1 }}>
              <BTCheckBox />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <Text style={styles.tableCellHeading}>name</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableCellHeading}>sex</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={styles.tableCellHeading}>
                place and date of birth
              </Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.tableCellHeading}>groups</Text>
            </View>
          </View>

          {data.map((item: Data) => (
            <View key={item.id} style={styles.tableInnerCell}>
              <View style={{ flex: 1 }}>
                <BTCheckBox />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  style={styles.tableCellImage}
                  source={'https://via.placeholder.com/50x50'}
                  alt={item.name}
                />
              </View>
              <View style={{ flex: 2 }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text>{item.sex}</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {item.birthPlace}, {new Date(item.dob).toDateString()}
                </Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text>{item.groups.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
