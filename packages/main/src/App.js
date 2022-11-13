import React, { lazy, Suspense } from 'react'
const App1 = lazy(() => import('app1/App'))
const App2 = lazy(() => import('app2/App'))
const Button = lazy(() => import('components/Button'))

function App() {
  return (
    <div>
      <h1>main</h1>
      <Button type="dashed">iammain</Button>
      <h2>app1</h2>
      <App1 />
      <h2>app2</h2>
      <App2 />
    </div>
  )
}

export default App
