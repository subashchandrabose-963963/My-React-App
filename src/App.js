// import "sdktest.css";
import { ZoomMtg } from "@zoom/meetingsdk";
import { useEffect } from "react";

function App() {

  // useEffect(() => {
    

  // }, [])
  // https://go.zoom.us/j/65747315692?pwd=n227l9a2baJGg4PbeEEVlZM0tacCT2.1
  // https://go.zoom.us/j/64074533172?pwd=9iCtC6QqbA9wpEJngZr60wFGjA3IE6.1

  const authEndpoint = ""; // http://localhost:4000
  const sdkKey = "x4oE3CmERseReQGft0GyQA";
  const meetingNumber = "64074533172";
  const passWord = "9iCtC6QqbA9wpEJngZr60wFGjA3IE6.1";
  const role = 0;
  const userName = "React";
  const userEmail = "zoomuser@wowmail.app";
  const registrantToken = "";
  const zakToken = "";
  const leaveUrl = "http://localhost:5173";
  const localSignature = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJ4NG9FM0NtRVJzZVJlUUdmdDBHeVFBIiwiYXBwS2V5IjoieDRvRTNDbUVSc2VSZVFHZnQwR3lRQSIsIm1uIjoiNjQwNzQ1MzMxNzIiLCJyb2xlIjowLCJpYXQiOjE3MjY3MzgzMTcsImV4cCI6MTcyNjc0NTUxNywidG9rZW5FeHAiOjE3MjY3NDU1MTd9.dk9JIMQ-8i1tPttYdGm8MTOV4jJyVb_P5jui5N4YjDI"

  // const getSignature = async () => {
  //   try {
  //     const req = await fetch(authEndpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         meetingNumber: meetingNumber,
  //         role: role,
  //       }),
  //     });
  //     const res = await req.json();
  //     const signature = res.signature;
  //     console.log("Signature received:", signature);
  //     startMeeting(signature);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  function startMeeting(signature) {
    alert(7)
    ZoomMtg.preLoadWasm();
 ZoomMtg.prepareWebSDK();
    const zmmtgRoot = document.getElementById("zmmtg-root");
    if (zmmtgRoot) {
      zmmtgRoot.style.display = "block";
    } else {
      console.error("Element with ID 'zmmtg-root' not found.");
      return;
    }

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: (success) => {
        console.log("ZoomMtg.init success:", success);
        ZoomMtg.join({
          signature: localSignature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log("ZoomMtg.join success:", success);
          },
          error: (error) => {
            console.log("ZoomMtg.join error:", error);
          },
        });
      },
      error: (error) => {
        console.log("ZoomMtg.init error:", error);
      },
    });
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <button onClick={startMeeting}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;
