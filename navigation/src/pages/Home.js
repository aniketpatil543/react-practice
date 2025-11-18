import Navbar from "../components/Navbar"

export default function Home(){
   return (
     <div style={{
        backgroundColor:"gray"
    }}>
        <div>
            <Navbar></Navbar>
        </div>
        <div
  style={{
    backgroundColor: "gray",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  Home
</div>

    </div>
   )
}