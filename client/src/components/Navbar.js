export default function Navbar() {
  return (
    <div style={{padding:10,background:"#eee"}}>
      <a href="/">Dashboard</a> |{" "}
      <a href="/explorer">Explorer</a> |{" "}
      <button onClick={()=>{
        localStorage.removeItem("token");
        window.location="/login";
      }}>
        Logout
      </button>
    </div>
  );
}
