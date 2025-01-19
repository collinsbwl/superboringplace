export default function Intro() {
    return (
      <div style={introStyle}>
        <h1 style={titleStyle}>the most boring place on earth</h1>
        <p style={paragraphStyle}> data analysis and algorithms to pinpoint just how lame the area near you is</p>
        <div style={buttonContainerStyle}>

        <button style={buttonStyle} onClick={() => alert('')}>check how boring your location is</button>
        <button style={buttonStyle} onClick={() => alert('')}>check how boring your face is</button>
</div>
      </div>
    );
  }
  
  const introStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '20px',
    zIndex: 10, // Keeps logo near the top (reminder)
  };
  
  const titleStyle = {
    fontFamily: "'Noto Serif', serif",
    fontSize: '2.5rem',
    color: 'white',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 

  };
  
  const paragraphStyle = {
    fontFamily: "'IBM Plex Serif', serif",
    fontSize: '1.2rem',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',

  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontFamily: "'IBM Plex Serif', serif",
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
};
  
const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
};