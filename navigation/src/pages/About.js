import Navbar from "../components/Navbar"


export default function About(){
   return (
     <div style={{
        backgroundColor:"blueviolet"
     }}>
            <div>
                <Navbar></Navbar>
            </div>
            <div
  style={{
    backgroundColor: "blueviolet",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  About
</div>

        </div>
   )
}