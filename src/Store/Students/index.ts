// #region Global Imports
import { produce } from 'immer'
// #endregion Global Imports

// #region Local Imports
import { Students } from './types'
import { Data } from '../../Interface'
// #endregion Local Imports

const INITIAL_STATE = {
  list: [],
}

export const studentReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: Data[] | any }
) => {
  return produce(state, (draftState: { list: Data[] }) => {
    switch (action.type) {
      case Students.list:
        draftState.list = action.payload
        break

      case Students.add:
        draftState.list.unshift(action.payload)
        break

      case Students.update:
        draftState.list[action.payload.id] = action.payload.data
        break

      case Students.remove:
        draftState.list.splice(action.payload, 1)
        break

      case Students.filter:
        draftState.list = draftState.list.filter((item) =>
          item.name.toLowerCase().includes(action.payload)
        )
        break

      default:
        return draftState
    }
  })
}
