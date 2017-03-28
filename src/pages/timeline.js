import React from 'react'
import ListItem from '../components/list-item'
import {connect} from 'react-redux'
import {map} from 'ramda'

const TimelinePage = (props) => {
  const li = entry => {
    return (
      <ListItem key={entry.updated}
        image={entry.image}
        text={entry.status}
        updated={entry.updated}
      />
    )
  }
  return (
    <div>
      <h2 className="tc">Timeline</h2>
      <ul className="list pl0 mt0 measure center">
        {map(li, props.list)}
      </ul>
    </div>
  )
}

const connector = connect((state) => {
  return {
    list: state.list.reverse()
  }
})

export default connector(TimelinePage)
