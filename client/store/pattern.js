import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_PATTERN = 'GOT_PATTERN'
const GOT_ALL_PATTERNS = 'GOT_ALL_PATTERNS'
const ADDED_PATTERN = 'ADDED_PATTERN'
const UPDATE_PATTERN = 'UPDATE_PATTERN'
const DELETE_PATTERN = 'DELETE_PATTERN'

/**
 * INITIAL STATE
 */
const initialState = {
  selectedPattern: {},
  patternList: []
}

/**
 * ACTION CREATORS
 */
const gotAllPatterns = list => ({type: GOT_ALL_PATTERNS, list})
const gotPattern = pattern => ({type: GOT_PATTERN, pattern})
const addedPattern = pattern => ({type: ADDED_PATTERN, pattern})
const updatePattern = pattern => ({type: UPDATE_PATTERN, pattern})
const removePattern = pattern => ({type: DELETE_PATTERN, pattern})

/**
 * THUNK CREATORS
 */
export const getPattern = patternId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/patterns/${patternId}`)
    dispatch(gotPattern(data))
  } catch (e) {
    console.error(e)
  }
}

export const getPatterns = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/patterns`)
    dispatch(gotAllPatterns(data))
  } catch (e) {
    console.error(e)
  }
}

export const addPattern = newPattern => async dispatch => {
  try {
    console.log(newPattern)
    
    const {data} = await axios.post(`/api/patterns`, newPattern)
    dispatch(addedPattern(data))
  } catch (e) {
    console.error(e)
  }
}

export const deletePattern = pattern => async dispatch => {
  try {
    await axios.delete(`/api/patterns/${pattern.id}`, pattern.id)
    dispatch(removePattern(pattern.id))
  } catch (e) {
    console.error(e)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_PATTERNS:
      return action.list
      case ADDED_PATTERN:
        return [...state.list, action.pattern]
    case DELETE_PATTERN:
      return state.list.filter(pattern => pattern.id !== action.pattern)
    default:
      return state
  }
}
