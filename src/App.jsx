import React, { useEffect, useRef, useState } from "react";

// Rotating alert bar (marquee style, pause on hover)
function AlertBar() {
  const alerts = [
    "Indoor Play Zone, Now Open For Bookings!",
    "School Launch Alert!",
    " Indoor Play Zone, Now Open For Bookings!",
    " Launch Alert!",
  ];
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="alert-bar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        background: "#f8f0fa",
        borderBottom: "1px solid #f0e1f7",
        width: "100%",
        overflow: "hidden",
        fontWeight: 600,
        fontSize: "1rem",
        color: "#3d2c8d",
        height: 38,
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className={`alert-marquee${paused ? " paused" : ""}`}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {alerts.concat(alerts).map((msg, i) => (
          <span key={i} style={{ marginRight: 48, display: "inline-flex", alignItems: "center" }}>
            <span role="img" aria-label="alert" style={{ marginRight: 8 }}>
              📢
            </span>
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <img
          src="https://klay.co.in/wp-content/uploads/2023/07/logo.svg"
          alt="KLAY Logo"
          className="navbar-logo"
        />
        <div className="navbar-links">
          <a href="#">Admissions</a>
          <div className="dropdown">
            <a href="#">Programs <span style={{fontSize:12}}>▼</span></a>
            {/* Dropdown can be implemented if needed */}
          </div>
          <a href="#">Corporates</a>
          <a href="#">Presence</a>
          <div className="dropdown">
            <a href="#">Resources <span style={{fontSize:12}}>▼</span></a>
          </div>
        </div>
        <div className="navbar-contact">
          <span role="img" aria-label="phone" style={{marginRight: 4}}>📞</span>
          +91 78758 17981
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          {/* <div className="hero-whatsapp">
            <span role="img" aria-label="whatsapp" style={{fontSize: 22, color: "#25d366", marginRight: 8}}>🟢</span>
            <span style={{color: "#25d366", fontWeight: 600}}>WhatsApp us /</span>
            <span style={{color: "#25d366", fontWeight: 600}}> Schedule a Tour</span>
          </div> */}
          <h1 className="hero-title">
            Nurturing little learners to create, imagine and do
            <br />
            <span className="hero-highlight">at Preschools & Daycare</span>
          </h1>
          <div className="hero-buttons">
            <button className="hero-btn">
              About Us <span role="img" aria-label="about">🧑‍🏫</span>
            </button>
            <button className="hero-btn">
              Find the Right Program <span role="img" aria-label="program">✅</span>
            </button>
            <button className="hero-btn">
              Locate a Centre <span role="img" aria-label="location">📍</span>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/05/22034353/banner_img_children-1024x558-1.webp"
            alt="Child"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
function FeaturesSection() {
  const features = [
    {
      img: "https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/03/21055216/frenchise-image01.webp",
      number: "1",
      title: "Holistic Child Development Approach",
      desc: "Nurturing the whole child through holistic development",
      link: "#"
    },
    {
      img: "https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/03/23060213/hs.webp",
      number: "2",
      title: "Health and Safety",
      desc: "Stringent protocols that safe-guard the physical, social and emotional safety of the child",
      link: "#"
    },
    {
      img: "https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/03/23060513/infra.webp",
      number: "3",
      title: "World-class Infrastructure",
      desc: "Sprawling space for the child to explore, play, learn and grow",
      link: "#"
    }
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">
        India's Trusted Chain of <br />
        <span className="features-highlight">Preschools and Daycare Centres</span>
      </h2>
      <div className="features-cards">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-img-wrap">
              <img src={f.img} alt={f.title} className="feature-img" />
            </div>
            <div className="feature-number">{f.number}</div>
            <div className="feature-content">
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
              <a href={f.link} className="feature-link">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function App() {
  return (
    <>
      <AlertBar />
      <Navbar />
      <Hero />
      <FeaturesSection/>
    </>
  );
}

export default App;



// import React from "react";
// import Navbar from "./Navbar";
// function Navbar2() {
//   return (
//     <nav style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <img src="https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2024/02/03061842/cropped-KLAY-PRESCHOOLS-AND-DAYCARE-1-1.png" alt="Klay Logo" style={{ height: 40 }} />
//         <div style={{ display: "flex", gap: "2rem" }}>
//           <a href="#" style={{ color: "#333", fontWeight: 500 }}>Home</a>
//           <a href="#" style={{ color: "#333", fontWeight: 500 }}>About</a>
//           <a href="#" style={{ color: "#333", fontWeight: 500 }}>Programs</a>
//           <a href="#" style={{ color: "#333", fontWeight: 500 }}>Centers</a>
//           <a href="#" style={{ color: "#333", fontWeight: 500 }}>Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Hero() {
//   return (
//     <section style={{
//       background: "url('https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/05/22034353/banner_img_children-1024x558-1.webp') center/cover no-repeat",
//       color: "#fff",
//       minHeight: 400,
//       display: "flex",
//       alignItems: "center"
//     }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem" }}>
//         <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
//           India’s Most Trusted Preschool & Daycare
//         </h1>
//         <p style={{ fontSize: "1.25rem", maxWidth: 600 }}>
//           Early years are the most crucial for a child’s development. At KLAY, we provide a safe, nurturing, and stimulating environment for your child to learn, play, and grow.
//         </p>
//       </div>
//     </section>
//   );
// }
// function Features() {
//   return (
//     <section style={{ background: "#f8f8f8", padding: "3rem 0" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>Why Choose KLAY?</h2>
//         <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
//           <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: "2rem", flex: "1 1 250px", minWidth: 250 }}>
//             <h3 style={{ marginBottom: 10 }}>Safe Environment</h3>
//             <p>Our centers are designed for safety and security, ensuring peace of mind for parents.</p>
//           </div>
//           <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: "2rem", flex: "1 1 250px", minWidth: 250 }}>
//             <h3 style={{ marginBottom: 10 }}>Qualified Teachers</h3>
//             <p>Our educators are highly trained and passionate about early childhood education.</p>
//           </div>
//           <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: "2rem", flex: "1 1 250px", minWidth: 250 }}>
//             <h3 style={{ marginBottom: 10 }}>Holistic Curriculum</h3>
//             <p>We offer a blend of academics, play, and life skills for all-round development.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   return (
//     <section style={{ padding: "3rem 0", background: "#fff" }}>
//       <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>What Parents Say</h2>
//         <blockquote style={{ fontStyle: "italic", color: "#555", marginBottom: "1rem" }}>
//           "KLAY has been a second home for our child. The staff is wonderful and the environment is nurturing."
//         </blockquote>
//         <div style={{ color: "#888" }}>— Parent of KLAY Student</div>
//       </div>
//     </section>
//   );
// }
// function Partners() {
//   return (
//     <section style={{ background: "#f8f8f8", padding: "2rem 0" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>Our Partners</h2>
//         <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
//           <img src="https://klay.co.in/wp-content/uploads/2023/07/partner1.png" alt="Partner 1" style={{ height: 40 }} />
//           <img src="https://klay.co.in/wp-content/uploads/2023/07/partner2.png" alt="Partner 2" style={{ height: 40 }} />
//           <img src="https://klay.co.in/wp-content/uploads/2023/07/partner3.png" alt="Partner 3" style={{ height: 40 }} />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer style={{ background: "#222", color: "#fff", padding: "2rem 0", marginTop: "2rem" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
//         <p>&copy; 2025  kid Schools. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Navbar2 />
//       <Hero />
//       <Features />
//       <Testimonials />
//       <Partners />
//       <Footer />
//     </>
//   );
// }

// export default App;