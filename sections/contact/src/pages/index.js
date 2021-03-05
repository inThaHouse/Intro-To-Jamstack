import React, { useReducer } from 'react'
import Form from '../components/form/Form'
import * as styles from '../styles/indexPage.module.css'
import defaultState from '../utils/defaultState'
import reducer, { actions } from '../utils/reducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <>
      <h1 className={styles.heading}>Send an Email</h1>
      {state.status === 'SENT' ? (
        <p className={styles.success}>
          Message sent!
          <button
            type='reset'
            onClick={() => dispatch({ type: actions.reset })}
            className={`${styles.button} ${styles.centered}`}
          >
            Reset
          </button>
        </p>
      ) : (
        <Form />
      )}
    </>
  )
}

export default Home
