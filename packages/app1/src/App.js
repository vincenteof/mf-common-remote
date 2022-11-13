import React, { lazy, Suspense } from 'react'

const Button = lazy(() => import('components/Button'))

function App() {
  return (
    <div>
      <span>input1</span>
      <input></input>
      <Suspense fallback="loading">
        <Button>click1</Button>
      </Suspense>
    </div>
  )
}

export default App
