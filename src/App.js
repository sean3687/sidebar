import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
import { HiChevronLeft,HiMagnifyingGlass } from "react-icons/hi2";
import Accordion from 'react-bootstrap/Accordion'
import ProgressBar from 'react-bootstrap/ProgressBar'
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css'
import store from './redux/store'



function App() {
  const [fakeData, setFakeData] = useState(store.getState().fakeData)
  const [progress, setProgress] = useState(store.getState().progress)
  const [completion,changeCompletion]= useState(20)
  const [test, setTest] = useState("")


  useEffect(() => {
    
      setFakeData(store.getState().fakeData)
      setProgress(store.getState().progress)
     console.log(store.getState().progress)
  
  }, [store.getState().progress]);
  
  const handleChange = (event) => {
    const value = event.target.value
    setTest(value)
  }

  return (
    <div className="program">
        <div className="programHeader">
          <div className="program_title">
              Michelle'sProgram
          </div>
          <div className="program_progress">
            <div className="direct">
              <div className="direct_icon">
                <HiChevronLeft/>
              </div>
              <div className="direct_text">
                Go to Dashboard
              </div>
            </div>
            <div className="displayProgress">
              <div className="progress_title">
                Your First Week
              </div>
              <ProgressBar now={completion}/>
              <div className="progress_completion">
                  <strong>{completion}</strong>% complete
              </div>
               
              
            </div>
          </div>
          <div className="searchBox">
          <InputGroup className="searchBox_input" onChange={handleChange}>
            <InputGroup.Text><HiMagnifyingGlass/></InputGroup.Text>
            <Form.Control placeholder="Search by assignment"/>
          </InputGroup>
          </div>
        </div>
        <div className='programList'>
          
            {fakeData.map((route,key) => (
            <Accordion className="list">
              <Accordion.Item>
              <Accordion.Header>{route.name}</Accordion.Header>
                <Accordion.Body>
                  {route.subSteps.map((item,key) =>(
                    <div className="task">
                      <div className="task_main">
                        <div className="completion">
                          <Form.Check id={key} defaultChecked={item.finished}/>
                        </div>
                        <div className="title">{item.name}</div>
                      </div>
                      <div className="task_description">
                        <div className="icon_des">
                          {item.icon}
                        </div>
                        <div className="type_des">
                          {item.style}
                        </div>
                        <div className="duration_des">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            ))
          }
        
        </div>
        
    </div>
  );
}

export default App;


// {programdatabase.map((route,key) => (
//   <Accordion 
//     title={route.name} 
//     children={
//       route.subSteps.map((item,key) =>(
//         <div>{item.name}</div>
//       ))
//     }/>
  
// ))
// }
