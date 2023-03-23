import React from 'react'
import PropTypes from 'prop-types'

export default function User({name, isLoggedIn, age, friends}) {
    if(!isLoggedIn) return <div>Not logged in</div>;
  return (
    <div>
        {`User: ${name} (${age})`}

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

User.defaultProps = {
    name: 'Guest',
    isLoggedIn: false,
}
