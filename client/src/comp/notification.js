import {AiFillBell} from "react-icons/ai";
import '../styles/notification.css'

const Notification = () => {


// REMAINING : API CALL TO NOTIFICATION AND CROSS BUTTON
// DYNAMICAALY RENDER NOTIFICATIONS

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
             <div class = "sec new">
               <div class = "txt">James liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/7 - 2:30 pm</div>
            </div>
            
             <div class = "sec new">
               <div class = "txt">Annita liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/7 - 2:13 pm</div>
            </div>
             <div class = "sec">
               <div class = "txt">Brie liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/6 - 9:35 pm</div>
            </div>
             <div class = "sec">
               <div class = "profCont">
               {/* <img class = "profile" src = "https://c1.staticflickr.com/4/3725/10214643804_75c0b6eeab_b.jpg"> */}
                </div>
               <div class = "txt">Madison liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/6 - 4:04 pm</div>
            </div>
             <div class = "sec">
               <div class = "profCont">
                </div>
               <div class = "txt">Ted liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/6 - 10:37 am</div>
            </div>
             <div class = "sec">
               <div class = "profCont">
               {/* <img class = "profile" src = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Pat-headshot-square.jpg"> */}
                </div>
               <div class = "txt">Tommas liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/5 - 7:30 pm</div>
            </div>
             <div class = "sec">
               <div class = "profCont">
               {/* <img class = "profile" src = "https://c1.staticflickr.com/8/7407/13785133614_6254abb8c4.jpg"> */}
                </div>
               <div class = "txt">Claire liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/5 - 2:30 pm</div>
            </div>
             <div class = "sec">
               <div class = "profCont">
               {/* <img class = "profile" src = "//c1.staticflickr.com/1/185/440890151_54c5b920b0_b.jpg"> */}
                </div>
               <div class = "txt">Jerimaiah liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/5 - 1:34 pm</div>
            </div>
             <div class = "sec">               
               <div class = "txt">Debra liked your post: "Pure css notification box"</div>
              <div class = "txt sub">11/5 - 10:20 am</div>
            </div>
         </div>
        </div>
     </div>
  </div>
        </>
     );
}
 
export default Notification;