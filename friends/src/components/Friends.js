import React from 'react';
//import FriendForm from './FriendForm';

import {axiosWithAuth} from './utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));

    }
    

    render() {
        console.log(this.state.friends);
        return (
            <div>
                {this.state.friends.map( friend => (
                    <p>{friend.name}</p>
                    
                ))}
        
            </div>
        )
                
    }
}

export default Friends;
