import React from 'react';

const certificateList = [
  "cert1.pdf", "cert2.pdf", "cert3.pdf", "cert4.pdf", "cert5.pdf",
  "cert6.pdf", "cert7.pdf", "cert9.pdf", "cert10.pdf",
  "cert11.pdf", "cert12.pdf", "cert13.pdf", "cert14.pdf"
];

function CertificatesPage() {
  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "#111",
      color: "#fff",
      minHeight: "100vh"
    }}>
      <h2 style={{ marginBottom: "30px", textAlign: "center" }}>All Certificates</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px"
      }}>
        {certificateList.map((cert, idx) => (
          <div
            key={idx}
            style={{
              width: "320px",
              backgroundColor: "#1f1f1f",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.4)"
            }}
          >
            <iframe
              src={`/certificates/${cert}`}
              title={cert}
              width="100%"
              height="180px"
              style={{
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#fff"
              }}
            />
            <div style={{ textAlign: "center", marginTop: "10px", marginLeft: "60px" }}>
              <a
                href={`/certificates/${cert}`}
                download
                className="custom-dlbtn-wrapper"
              >
                <span className="custom-dlbtn-text">Download</span>
                <span className="custom-dlbtn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="custom-dlbtn-svg">
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesPage;
