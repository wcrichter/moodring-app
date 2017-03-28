import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {nth} from 'ramda'

//get card component
import Card from '../components/card'

const CurrentPage = (props) => {
  return (
    <div className="tc">
      <Link className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue" to="/new">Record New Status</Link>
      <Card
        image={props.current.image}
        title={props.current.status}
      >
        Last Updated: <br />
        {props.current.updated}
      </Card>
    </div>
  )
}

//get list and show list item on list
const connector = connect((state) => {
  return {
    current: nth(-1, state.list)
  }
})

export default connector(CurrentPage)
