import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
function UsersList(props){
    return(
        <ul className="users-list">
        {props.items.map(user => (
          <UserItem 
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}  
          />  
        ))}
        </ul>
    )
}

export default UsersList;

