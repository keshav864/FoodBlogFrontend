import Posts from "./posts";
import Banner from "./banner";
import { Link } from "react-router-dom";


const Home = () => {
   return (
      <div className="home">
         <div className="hero d-flex justify-content-center">
            <img src="/images/beans.jpg" width="650" height="600" alt="" />
            <div className="infoSection">
               <div className="info" style={{ height: "530px", width: "350px", backgroundColor: "#ffd615", padding: "48px" }}>
                  <p style={{ color: "rgb(0,0,0,0.4)" }}>Featured Posts</p>
                  <h1 className="" style={{ fontWeight: "900" }}>Love the Delicious & Tasty Foods</h1>
                  <div className="line mb-4"></div>
                  <p style={{ color: "rgb(0,0,0,0.4)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni ipsam vel? Saepe ducimus non omnis </p>
                  <button className="btn btn-dark btn-lg rounded-1">Read More  &gt;</button>
               </div>
               <Link to="/add-post" className="btn border heroBtn fw-bold fs-4 rounded-0 text-secondary" style={{width:"350px", height:"70px",padding:"20px"}}>Add a Post &gt;</Link>
            </div>
         </div>
      </div>
   );
}

export default Home;