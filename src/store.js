import {createStore} from 'redux'
import {merge} from 'ramda'

const initialState = {
  list: [{
    status: 'Happy',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056',
    updated: new Date().toISOString()
  }],
  moods: [{
    value: 5,
    text: 'ECSTATIC',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?v=1480481059'
  },{
    value: 4,
    text: 'HAPPY',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056'
  },{
    value: 3,
    text: 'So So',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Neutral_Face_Emoji_large.png?v=1480481054'
  },{
    value: 2,
    text: 'SAD',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055'
  },{
    value: 1,
    text: 'DEPRESSED',
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Tired_Face_Emoji_a5bdf862-1509-419f-9e2a-c9208ae1938b_large.png?v=1480481057'
  }]
}

const store = createStore(
  (state=initialState, action) => {
    return merge(state, action.payload)
  }
)

export default store
