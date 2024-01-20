import React, { useEffect, useState } from 'react';
import './food.css';
import Clock from './Clock';
import jsonData from './../Json files/kitchenjsonformat.json';

function Food() {
  const [selectedToken, setSelectedToken] = useState(null);
  const jsondata = jsonData;

  const disableScrollingStyle = {
    overflow: 'hidden',
  };

  useEffect(() => {
    const audioElement = new Audio(); // Create an Audio element

    const announceAudio = () => {
      if (selectedToken) {
        // Set the source of the audio element dynamically based on the selectedToken
        audioElement.src = `../component/audio/${selectedToken}.mp3`;
        audioElement.play(); // Play the audio
      }
    };

    announceAudio(); // Announce audio on mount

    return () => {
      // Clean up the audio element when the component is unmounted
      audioElement.pause();
      audioElement.src = '../components/audio/334.mp3';
    };
  }, [selectedToken]);
  console.log(useEffect, 'tttttttttttttttttttttttt');
  return (
    <>
      <div
        className="navbar"
        style={{ backgroundColor: '#d8dee6', height: '61px' }}
      >
        <div
          className="logo"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            fontSize: '13px',
            paddingRight: '80px',
          }}
        >
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: '140px', height: '61px' }}
          ></img>
          <h1 style={{ color: 'rgb(5, 160, 202)' }}>Food & Beverages</h1>
          <div>
            <Clock />
          </div>
        </div>
      </div>

      <div style={{ ...disableScrollingStyle }}>
        <div
          className="token"
          style={{ maxWidth: '1600px', marginTop: '10px' }}
        >
          <h1 style={{ marginTop: '10px', marginBottom: '8px' }}>
            Your Token Number
          </h1>

          <div>
            {jsondata.map((x) => (
              <div style={{ width: '60%', marginLeft: '10%' }} key={x.TOKENNO}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '2px',
                    width: '80%',
                    height: '115px',
                    paddingLeft: '55%',
                  }}
                >
                  <h1
                    style={{
                      fontSize: '75px',
                      marginRight: '30px',
                      marginLeft: '-20px',
                      marginTop: '5px',
                    }}
                  >
                    {x.TOKENNO}
                  </h1>

                  <div
                    style={{
                      fontSize: '18px',
                      textAlign: 'start',
                      marginTop: '25px',
                    }}
                  >
                    {x.ITEMDESC.map((y, index) => (
                      <div key={index}>{y}</div>
                    ))}
                  </div>
                  <br></br>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
