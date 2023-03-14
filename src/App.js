// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);
const showAlert =(message,type)=>{
 setAlert({
  msg : message,
  type : type
 })
setTimeout(() => {
  setAlert(null)
}, 2000);

}

  const[mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
       document.body.style.backgroundColor ='#02345f';
       showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode Enabled","success");
    }

}

  return (
    <>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode ={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
