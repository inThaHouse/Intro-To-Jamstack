import React, { useReducer } from 'react'
import reducer, { actions } from '../../utils/reducer'
import defaultState from '../../utils/defaultState'
import * as styles from './form.module.css'

const Form = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const setStatus = (status) => dispatch({ type: actions.updateStatus, status })
  const updateFieldValue = (fieldName) => (event) =>
    dispatch({ type: fieldName, [fieldName]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('SENDING')
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(state),
    })

    const sum = await response.json()
    console.log(sum)
  }

  return (
    <form
      className={`${styles.form} ${state.status === 'SENDING' && styles.sending}`}
      onSubmit={handleSubmit}
    >
      <label className={styles.label}>
        Name
        <input
          type='text'
          value={state.name}
          onChange={updateFieldValue('name')}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type='email'
          value={state.email}
          onChange={updateFieldValue('email')}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Subject
        <input
          type='text'
          value={state.subject}
          onChange={updateFieldValue('subject')}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Body
        <textarea value={state.body} onChange={updateFieldValue('body')} className={styles.input} />
      </label>

      <button className={styles.button} disabled={state.status === 'SENDING'}>
        {state.status !== 'SENDING' ? 'Send' : 'Sending...'}
      </button>
    </form>
  )
}

export default Form
