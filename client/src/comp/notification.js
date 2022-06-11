import { useEffect, useState } from "react";
import {AiFillBell,AiOutlineClose } from "react-icons/ai";
import '../styles/notification.css'

const Notification = () => {


// REMAINING : API CALL TO NOTIFICATION AND CROSS BUTTON
// DYNAMICAALY RENDER NOTIFICATIONS

const [notification,setNotification] = useState({})

useEffect(()=>{


  // fetch notifications

},[])

const deleteNotificatin = (e) => {

  console.log(e.target.parentElement) // access parent ID

  // API to delete notification
  
}

    return ( 
        <>
   <div class = "notification">
  <div class = "notBtn" href = "#">
    {/* <!--Number supports double digets and automaticly hides itself when there is nothing between divs --> */}
    <div class = "number">2</div>
    <AiFillBell size={"1.8em"} className="notification__icon"/>
      <div class = "box">
        <div class = "display">
          {/* <div class = "cont"><!-- Fold this div and try deleting evrything inbetween --> */}
             <div class = "sec">
               <div class = "txt">James liked your post: "Pure css notification box"
               </div>           
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>
            
             <div class = "sec">
               <div class = "txt">Annita liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
               <div class = "txt">Brie liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
               <div class = "txt">Madison liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
               
               <div class = "txt">Ted liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
               <div class = "txt">Tommas liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
               <div class = "txt">Claire liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>

             <div class = "sec">
                <div class = "txt">Jerimaiah liked your post: "Pure css notification box"</div>
                <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                  deleteNotificatin(e)
                }} 
                className="icon"/>
            </div>

             <div class = "sec">               
               <div class = "txt">Debra liked your post: "Pure css notification box"</div>
               <AiOutlineClose size={"1.4em"} onClick={(e)=>{
                 deleteNotificatin(e)
               }} className="icon"/>
            </div>
         </div>
        </div>
     </div>
  </div>
        </>
     );
}
 
export default Notification;