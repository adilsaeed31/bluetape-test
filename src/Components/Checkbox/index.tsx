// #region Global Imports
import { useState } from 'react'
import { CheckBox } from 'react-native'
// #endregion Global Imports

export default function BTCheckbox(props: any) {
  const [isSelected, setSelected] = useState(false)
  return <CheckBox value={isSelected} onValueChange={setSelected} {...props} />
}
