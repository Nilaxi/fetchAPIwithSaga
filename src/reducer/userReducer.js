const initialState =
{
  data: [],
  isLoading: false,
  error: {}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_USERS_REQUESTED':
      return { ...state, isLoading: true }
    case 'GET_USER_SUCCESS':
      return { ...state, isLoading: false, data: payload }
    case 'GET_USER_FAILED':
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
