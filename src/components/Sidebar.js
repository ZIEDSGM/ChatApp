import React, { useContext, useEffect, useState } from 'react'
import { ListGroup ,Row, Col,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppContext } from '../context/AppContext';
import {addNotifications, resetNotifications } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import "./Sidebar.css";

function Sidebar() {
    const[name,setName]=useState("")
    const [friendsList, setFriendList] = useState([]);

    const user =useSelector((state)=> state.user);
    const { socket, setMembers , members , setCurrentRoom,setRooms,privateMemberMsg, rooms, setPrivateMemberMsg,currentRoom}= useContext(AppContext);
   const dispatch =useDispatch()
   
    function getRooms(){
       fetch("http://localhost:5001/rooms")
      .then((res)=>res.json())
      .then((data)=>setRooms(data))
    }
   
function orderIds(id1 , id2){
  if (id1 > id2){
    return id1 +"-"+ id2;  }
    else{
      return id2 +"-" +id1;
    }
}

   function joinRoom(room , isPublic = true){
if(!user){
  return alert('Please login')
}
    socket.emit("join-room", room,currentRoom);
    setCurrentRoom(room);

    if(isPublic){
      setPrivateMemberMsg(null);

    }
 dispatch(resetNotifications(room));

 socket.off('notifications').on('notifications', (room)=>{
  dispatch(addNotifications(room));
 })
   }
   
    useEffect(()=>{
      if(user){
        setCurrentRoom('general')
        getRooms()
        socket.emit('join-room','general')
        socket.emit('new-user')
      }
    },[])




    socket.off("new-user").on("new-user",(payload)=>{
      console.log(payload)
      setMembers(payload)
      console.log(members)
    })

   function handlePrivateMemberMsg(member){
             setPrivateMemberMsg(member);
             const roomId = orderIds(user._id,member._id);
             joinRoom(roomId, false);

   }
   /*const handleFriendClick = async () => {
    try {
      const response = await fetch('http://localhost:5001/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: user._id, name: name }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add friend');
      }
  
      // Handle the response accordingly
      const responseData = await response.text();
      console.log(responseData);
  
      // Update the friendList state if the friend is not already added
      const isFriendAdded = friendList.find((friend) => friend[0]._id === userfriend[0]._id);
      if (!isFriendAdded) {
        setFriendList([...friendList, userfriend]);
      }
    } catch (error) {
      console.error(error);
    }
  };*/
  const handleFriendClick = async () => {
    try {
      const response = await fetch('http://localhost:5001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: user._id, name: name }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add friend');

      }
      console.log(user)
      //setFriendList(user.friendsList)

      /*const userfriend = 
      const isFriendAdded = friendsList.find((friend) => friend[0]._id === userfriend[0]._id);
      if (!isFriendAdded) {
        setFriendList([...friendsList, userfriend]);
      }*/
    } catch (error) {
      console.error(error);
    }
  };
  
  

    /*const saveFriendList = async (userId, friendList) => {
      try {
        const response = await fetch('http://localhost:5001/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId:user._id, friendsList:friendList }),
        });
    
        if (!response.ok) {
          throw new Error('Error saving friend list');
        }
    
        console.log('Friend list saved:', user.friendsList);
      } catch (error) {
        alert('Error saving friend list:', error);
      }
    };*/

    


    if (!user){
      return 
      <>
      </>;
    }
    console.log(friendsList)
    
  return (
  <div>
    <h2>Avaible rooms</h2>
    <ListGroup>
    {rooms.map((room, idx) => (
            <ListGroup.Item key={idx}onClick={()=>joinRoom(room)} 
            active={room==currentRoom} style={{cursor:'pointer',display:'flex',justifyContent:'space-between'}}>
                {room} {currentRoom !== room && <span className='badge rounded-pill bg-primary'>{user.newMessages[room]}</span>}
            </ListGroup.Item>
   
    ))}
    </ListGroup>
    
    <h2>Members</h2>
    <ListGroup className='mb-5'>
      <form>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <Button onClick={handleFriendClick}>Add Friend</Button>
      </form>
    {members.map((member)=>(
      member.name==name && member._id !=user._id ? (<ListGroup.Item key={member.id} style={{cursor:"pointer"}} 
      active={privateMemberMsg?._id==member?._id} 
      onClick={()=>handlePrivateMemberMsg(member)} disabled={member._id===user._id}>
        <Row>
          <Col xs={2} className="member-status">
            <img src={member.picture} className='member-status-img' />
            {member.status =="online" ? <i className='fas fa-circle sidebar-online-status'></i> : <i className='fas fa-circle sidebar-offline-status'></i>}
          </Col>
         <Col xs={9}>
          {member.name}
          {member._id === user?._id && " (You)"}
          {member.status =="offline" && " (offline)"}
          </Col>
          <Col xs={1}>
            <span className='badge rounded-pill bg-primary'>{user.newMessages[orderIds(member._id, user._id)]}</span>
          </Col>
        </Row>
      
      </ListGroup.Item>) :<></>
        
  
    ))}


    </ListGroup>

    <ListGroup className='mt-5' style={{marginTop:50}}>
      {/*friendsList.map((array)=>array.map((friend)=>(
        <ListGroup.Item key={friend.id} style={{cursor:"pointer"}} 
        active={privateMemberMsg?._id==friend?._id} 
        onClick={()=>handlePrivateMemberMsg(friend)} disabled={friend._id===user._id}>
          <Row>
            <Col xs={2} className="member-status">
              <img src={friend.picture} className='member-status-img' />
              {friend.status =="online" ? <i className='fas fa-circle sidebar-online-status'></i> : <i className='fas fa-circle sidebar-offline-status'></i>}
            </Col>
           <Col xs={9}>
            {friend.name}
            {friend._id === user?._id && " (You)"}
            {friend.status =="offline" && " (offline)"}
            </Col>
            <Col xs={1}>
              <span className='badge rounded-pill bg-primary'>{user.newMessages[orderIds(friend._id, user._id)]}</span>
            </Col>
          </Row>
        
        </ListGroup.Item>

      ))
      )
      */}
    </ListGroup>
    </div>
  
  )

}

export default Sidebar