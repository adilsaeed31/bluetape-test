// #region Global Imports
import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { NextPage } from 'next'
import { View, ActivityIndicator, Text } from 'react-native'
// #endregion Global Imports

// #region Local Imports
import { useStudents } from '../src/Hooks'
import { Students } from '../src/Store/Students/types'
import { BTLayout, BTHeader, BTTable } from '../src/Components'
import { Data } from '../src/Interface'

import styles from '../src/Styles/Home'
// #endregion Local Imports

const Home: NextPage = () => {
  const { data, isLoading, isError } = useStudents()

  const students = useSelector((state: any) => state.students.list)
  const dispatch = useDispatch()

  const deleteStudent = (id: number) => {
    dispatch({ type: Students.remove, payload: id })
  }

  const filterStudent = (name: string) => {
    dispatch({ type: Students.filter, payload: name })
  }

  const addStudent = (data: Data) => {
    dispatch({ type: Students.add, payload: data })
  }

  const updateStudent = (id: number) => {
    const updateData: Data = {
      id: 102,
      name: 'Myron Carroll II',
      sex: 'Gender neutral',
      birthPlace: 'Schenectady',
      dob: '2021-05-10T01:53:46.133Z',
      email: 'Nikki.Purdy14@hotmail.com',
      groups: {
        name: 'Sports',
        leaderName: 'Sandra Walker',
        subject: 'Senior Applications Associate',
        datetime: '2022-01-11T21:21:33.279Z',
        enrolled: [77, 22],
      },
    }

    dispatch({ type: Students.update, payload: { id, data: updateData } })
  }

  useEffect(() => {
    const getStudents = (data: Data) => {
      dispatch({ type: Students.list, payload: data })
    }

    if (!!data) getStudents(data)
  }, [data, dispatch])

  if (isLoading) return <ActivityIndicator />

  if (isError) return <Text>No Found!</Text>

  const handleAdd = () => {
    addStudent({
      id: 101,
      name: 'Myron Carroll II',
      sex: 'Gender neutral',
      birthPlace: 'Schenectady',
      dob: '2021-05-10T01:53:46.133Z',
      email: 'Nikki.Purdy14@hotmail.com',
      groups: {
        name: 'Sports',
        leaderName: 'Sandra Walker',
        subject: 'Senior Applications Associate',
        datetime: '2022-01-11T21:21:33.279Z',
        enrolled: [77, 22],
      },
    })
  }

  return (
    <BTLayout style={styles.container}>
      <Head>
        <title>Bluetape FE Test</title>
        <meta name="description" content="BlueTape FE Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BTHeader />

      <main>
        <BTTable
          data={students}
          handleAdd={handleAdd}
          updateStudent={updateStudent}
          deleteStudent={deleteStudent}
          filterStudent={filterStudent}
        />
      </main>

      <footer>
        <View style={styles.box}>
          <Text>BlueTape &copy; 2022</Text>
        </View>
      </footer>
    </BTLayout>
  )
}

export default Home
