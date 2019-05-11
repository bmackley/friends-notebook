import React from 'react';
import Friend from './Friend';

class FriendList extends React.Component{
  constructor(props){
    super(props);
    this.state = {friends: [{
      name: "Kyle",
      address: "California",
      phone: "555-555-5555"
    },{
      name: "Patrick",
      address: "Texas",
      phone: "222-555-2222"
    }]}
  }
  handleSubmitForm = (e)=>{
    const name = document.getElementById('name').value;
    const phone = document.getElementById('address').value;
    const address = document.getElementById('phone').value;
    const newFriend = {name, phone, address};
    this.setState({friends: [...this.state.friends, newFriend]} )
  }
  handleFriendDelete = (e)=> {
    console.log(e.target.id)
    const newFriendsState = this.state.friends.filter(friend=> {
      return friend.phone !== e.target.id
    });
    console.log(newFriendsState);
    this.setState({friends: [...newFriendsState]})
    //Set state for friends to be the newState
  }
  render(){
    const friendsHtml = this.state.friends.map((friend, index) =>
          <Friend key={friend.name+ index}
          name={friend.name} phone={friend.phone}
          address={friend.address}
          removeFriend={this.handleFriendDelete}
          id={friend.phone}/>

    )
    return(
      <div>
        This is the friend list
        {friendsHtml}
        <form>
          <input id="name" placeholder="name"/>
          <input id="address" placeholder="address"/>
          <input id="phone" placeholder="phone"/>
        </form>
        <button onClick={this.handleSubmitForm}>Submit</button>
      </div>
    )
  }
}

export default FriendList
