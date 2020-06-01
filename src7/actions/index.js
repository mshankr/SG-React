import _ from 'lodash'
import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import { FETCH_POSTS, FETCH_USER } from './types'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const userIds = _.chain(getState().posts)
                    .map('userId')
                    .uniq()
                    .forEach(id => dispatch(fetchUser(id)))
                    .value(); // aka execute!

  // To run multiple async functions:
  // await Promise.all(userIds.forEach(id => dispatch(fetchUser(id))))
}

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceHolder.get('/posts')
  dispatch({ type: FETCH_POSTS, payload: res.data })
}

// Have to define outside, coz the return statement in the action creator will keep creating a new function, nothing cached!
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceHolder.get(`/users/${id}`)
  //
  // dispatch({ type: FETCH_USER, payload: res.data })
// })

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceHolder.get(`/users/${id}`)
  dispatch({ type: FETCH_USER, payload: res.data })
}
