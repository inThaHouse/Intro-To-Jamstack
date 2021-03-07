import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../components/form'
import Todo from '../components/todo'
import * as styles from '../styles/index.module.css'

const Home = () => {
  const [status, setStatus] = useState('loading')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let canceled = false

    // only load todos if we’re in the loading state
    if (status !== 'loading') return

    axios('/api/get-all-todos').then((result) => {
      if (canceled) return

      if (result.status !== 200) {
        return
      }

      setTodos(result.data.todos)
      setStatus('loaded')
    })

    return () => {
      // if the component unmounts, we want to cancel any active loads
      canceled = true
    }
  }, [status])

  return (
    <main>
      <h1 className={styles.heading}>JAMstack Todos</h1>
      <Form reloadTodos={() => setStatus('loading')} />

      <ul className={styles.todos}>
        {todos.map((todo) => (
          <li key={todo._id} className={styles.todo}>
            <Todo todo={todo} reloadTodos={() => setStatus('loading')} />
          </li>
        ))}
      </ul>

      {!todos.length && <p className={styles.loading}>loading todos...</p>}
    </main>
  )
}

export default Home
