import { useNavigate } from "react-router-dom";

function Footer(){
  const navigate = useNavigate();

  const footerStyle = {
    padding: "10px",
    position: "relative",
    bottom: 0,
    width: "100%",
    boxSizing: "border-box",

    /* warm orange gradient to match header */
    backgroundImage: "linear-gradient(to bottom, #EFA24A, #F6B25C, #e7b268)",
    color: "#2E2419", /* warm dark for headlines */
    paddingTop: "40px",
    paddingBottom: "60px"
  };

 const containerRow = {
  height: "40vh",
  width: "195vh",
  background:
    "linear-gradient(to bottom right, rgb(255, 253, 253) 0%, rgb(228, 218, 199) 100%)",
  borderRadius: "28px",           
  borderStyle: "solid",
  borderWidth: "4px",              
  borderLeftColor: "white",
  borderTopColor: "white",
  borderRightColor: "rgb(238, 228, 211)",
  borderBottomColor: "rgb(228, 218, 199)",
  boxShadow: "3px 4px 0px rgba(0,0,0,0.2)",
  margin: "20px",
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
};


  const leftCol = {
    flex: "1 1 60%",
    minWidth: "320px",
    color: "#2E2419"
  };

  const headlineStyle = {
    lineHeight: "70px",
    marginLeft: "20px",
    fontSize: "48px", 
    fontFamily: "system-ui",
    fontWeight: "800",
    marginTop: "8px",
    color: "#2E2419"
  };

  const subTextStyle = {
    lineHeight: "30px",
    marginLeft: "20px",
    fontSize: "20px",
    fontFamily: "system-ui",
    fontWeight: "600",
    marginTop: "20px",
    color: "#3B2F23",
    maxWidth: "700px"
  };

  const rightCol = {
    flex: "0 0 260px",
    minWidth: "220px",
    marginLeft: "auto",
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "12px",
    paddingRight: "40px"
  };

  const ctaButton = {
    fontFamily: "system-ui",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#7068AE",   /* same purple used in your header ctaStyle */
    color: "#F9C3D6",
    borderRadius: "25px",
    width: "140px",
    height: "52px",
    cursor: "pointer",
    boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08)",
    userSelect: "none"
  };

  const tinyMeta = { fontFamily: "system-ui", color: "#2E2419", opacity: 0.95 };

  const brandBigWrap = {
    fontSize: "96px",         /* big brand — lowered from 200 for layout sanity */
    fontWeight: "800",
    fontFamily: "system-ui",
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    color: "#2E2419",
    textAlign: "center"
  };

  const brandAccent = {
    color: "#1C8F2E", /* green accent like header */
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "white"
  };

  const logoRow = { display: "flex", justifyContent: "center", marginTop: "24px" };

  const bottomRow = {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "40px",
    paddingRight: "40px",
    color: "#2E2419",
    fontSize: "14px"
  };

  return(
    <div style={footerStyle}>
      <div style={containerRow}>
        <div style={leftCol}>
          <div style={headlineStyle}>
            Ready to <span style={{ color: "#7068AE" }}>explore</span><br />
            your imagination?
          </div>

          <div style={subTextStyle}>
            Explore your thoughts and ideas with our platform to enlarge your vision.
          </div>
        </div>

        <div style={rightCol}>
          <div
            onClick={() => navigate("/login")}
            style={ctaButton}
            role="button"
            aria-label="Get Started"
          >
            Get Started
          </div>

          <div style={tinyMeta}>No money required</div>
        </div>
      </div>

      <div style={brandBigWrap}>
        <div>
          Hill <span style={{color:"#7068AE"}}>Hikes</span>
        </div>
      </div>

      <div style={logoRow}>
        {/* serve from public/ */}
        <img src="/giti.png" alt="giti" style={{ width: "10%", maxWidth: "120px" }} />
      </div>

      <div style={bottomRow}>
        <div>© 2026 Hill Hikes Inc. All rights reserved.</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#7068AE", borderRadius: "3px" }} />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
