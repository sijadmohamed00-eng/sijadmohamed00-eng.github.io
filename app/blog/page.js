function Nav() {
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"16px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,8,20,.95)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,.05)",direction:"rtl"}}>
      <a href="/" style={{fontFamily:"Space Mono",fontSize:18,fontWeight:700,color:"#f0f4ff",textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>
        <span style={{width:8,height:8,background:"#ff2d7a",borderRadius:"50%"}}/>IQR
      </a>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        <a href="/blog" style={{fontFamily:"Cairo",fontSize:13,fontWeight:700,color:"rgba(240,244,255,.5)",textDecoration:"none"}}>← المدونة</a>
        <a href="https://wa.me/9647734383437" target="_blank" style={{fontFamily:"Cairo",fontSize:13,fontWeight:700,padding:"8px 20px",background:"#ff2d7a",color:"#fff",borderRadius:4,textDecoration:"none"}}>تواصل 💬</a>
      </div>
    </nav>
  );
}
