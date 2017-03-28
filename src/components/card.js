import React from 'react'

const Card = (props) => {
  return (
    <article className="pt3 ph3 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img src={props.image} className="db w-100 br2 br--top mb2" alt={props.title} />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{props.title}</h1>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          {props.children}
        </p>
      </div>
    </article>
  )
}

Card.propTypes = {
  image: React.PropTypes.string,
  title: React.PropTypes.string
}

export default Card
