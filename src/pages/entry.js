import React from 'react'
import {map, find, propEq, append} from 'ramda'
import {Link, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import ListItem from '../components/list-item'

const EntryPage = (props) => {
  return (
    <div className="pa2">
      <h2 className="tc">New Status</h2>
      <p className="tc">Select new status.</p>
      <ul className="list pl0 mt0 measure center">
        {map(mood => {
          return (
            <ListItem
              key={mood.value}
              {...mood}
              onClick={props.select(mood.value, props.moods, props.list, props.history)}
            />
          )
        }, props.moods)}
      </ul>
    </div>
  )
}

const connector = connect((state) => {
  return {
    list: state.list,
    moods: state.moods,
    page: state.page || 'new'
  }
}, (dispatch) => {
  return {
    select: (value, moods, list, history) => {
      return (e) => {
        const mood = find(propEq('value', value), moods)
        dispatch({type: 'UPDATE', payload: {
          list: append({
            image: mood.image,
            status: mood.text,
            updated: new Date().toISOString()
          }, list),
          page: 'current'
        }})
        history.push('/')
      }
    }
  }
})

export default connector(EntryPage)
