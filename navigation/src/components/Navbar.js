import { Link ,useLocation} from "react-router-dom"

export default function Navbar(){

   

    const location= useLocation();
    console.log('location',location)

    const activeStyle = {
    color: "red",
    fontWeight: "bold",
    textDecoration: "underline"
  };
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>

            <div style={{
                fontWeight:"bold"
            }}>
             Navbar
              
            </div >


            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-evenly"
            }}>
              <div style={{padding:"5px"}}>
                <Link to={"/"}
                 style={location.pathname === "/" ? activeStyle : {}}
                >
                 Home
                </Link>
              </div>
              <div style={{padding:"5px"}}>
                <Link to={"/contact"}
                 style={location.pathname === "/contact" ? activeStyle : {}}
                >
                  Contact
                </Link>
              </div>
              <div style={{padding:"5px"}}>
                <Link to={"/about"}
                 style={location.pathname === "/about" ? activeStyle : {}}
                >
                  About
                </Link>
              </div>
            </div>

         

        </div>
    )
}