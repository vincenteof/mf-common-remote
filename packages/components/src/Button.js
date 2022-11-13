import React from 'react'
import { Button, message } from 'antd'
import 'antd/dist/antd.css'

function MyButton(props) {
  return (
    <Button {...props} onClick={() => message.info('from components')}></Button>
  )
}

export default MyButton
