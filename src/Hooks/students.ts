// #region Global Imports
import useSWR from 'swr'
// #endregion Global Imports

// #region Local Imports
import { fetcher } from '../Helpers'
// #endregion Local Imports

export function useStudents(): {
  data: any
  isLoading: boolean
  isError: any
} {
  const { data, error } = useSWR(`/api/students`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
