import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <div>
          {data.map((singleData) => {
            return (
              <SingleQuestion title={singleData.title} info={singleData.info} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
