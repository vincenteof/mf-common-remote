import React, { lazy, Suspense } from 'react'
import { Checkbox } from 'antd'
import 'antd/dist/antd.css'

const Button = lazy(() => import('components/Button'))

function App() {
  return (
    <div>
      <Checkbox>check2</Checkbox>
      <Suspense fallback="loading">
        <Button>click2</Button>
      </Suspense>
    </div>
  )
}

export default App
