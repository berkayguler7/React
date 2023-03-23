import React from 'react'
import PropTypes from 'prop-types'

export default function User({name, isLoggedIn, age, friends}) {
  return (
    <div>
        {isLoggedIn ? `User: ${name} (${age})` : 'Not logged in'}

        {friends && friends.map((friend) => 
        <div key={friend.id}>{friend.name} {friend.age &&`(${friend.age})`}</div>)}

    </div>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
    })),
}
