import defaultState from './defaultState'

export const actions = {
  name: 'name',
  email: 'email',
  subject: 'subject',
  body: 'body',
  updateStatus: 'updateStatus',
  reset: 'reset',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.name:
      return { ...state, name: action.name }
    case actions.email:
      return { ...state, email: action.email }
    case actions.subject:
      return { ...state, subject: action.subject }
    case actions.body:
      return { ...state, body: action.body }
    case actions.updateStatus:
      return { ...state, status: action.status }
    case actions.reset:
    default:
      return defaultState
  }
}

export default reducer
