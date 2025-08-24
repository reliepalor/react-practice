import { useEffect, useState } from 'react'
import "./index.css";
import './App.css'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Practice/component/Header.js'
import Footer from './Practice/component/Footer.js'
import Info from './Practice/Information/Info.jsx'
import Card from './Practice/component/Card.js'
import Student from './Practice/component/Student.js'
import Greetings from './Practice/component/Greetings.js'
import List from './Practice/component/List.js'
import Courses from './Practice/component/Courses.jsx'
import Books from './Practice/Rendering-List/Books.jsx'
import Button from './Practice/Click-Event/Button.js'
import ProfilePicture from './Practice/Click-Event/ProfilePicture.jsx'
//-------------useState
import Sample1 from './Practice/useState/Sample1.js'
import Counter from './Practice/useState/Counter.js'
import Todo from './Practice/useState/ToDo.js'
import SampleOnChange from './Practice/useState/onChange.js'
import Updater from './Practice/useState/UpdaterFunction.jsx'
import Objects from './Practice/useState/Objects.js';
import Arrays from './Practice/useState/Arrays.js';
//-------------Activity
import ReportList from './Practice/Activity/ReportList.js'
import ColorPicker from './Practice/Activity/ColorPicker.js'
import TodoList from './Practice/Activity/TodoList.jsx';
//-------------useEffect
import Component1 from './Practice/useEffect/Component1.js';
import StopWatch from './Practice/Activity/StopWatch.js';


const App = () => {




  const [works, setWorks] = useState([
    {id: 1, activity: "Revise Chapter 1",type: "Manuscript",done: false },
    {id: 2, activity: "Fixing Login Page",type: "System",done: false },
    {id: 3, activity: "Designing UI",type: "System",done: false },
  ]);

  const handleWorkDone = (id) =>{
    const updated = works.map(work => 
      work.id === id ? { ...work, done : true} : work 
    );
    console.log(updated);
    setWorks(updated);
  }

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Buy milk', category: 'Personal', done: false },
    { id: 2, name: 'React activity', category: 'Work', done: false },
    { id: 3, name: 'Call mom', category: 'Personal', done: false },
    { id: 4, name: 'Cook Food', category: 'Work', done: false },
  ]);

  const handleMarkDone = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, done: true } : task
    );
    setTasks(updated);
  };


    const languages = [{id: 1, name:"HTML", stats: 75},
                        {id: 2, name:"CSS", stats: 60},
                        {id: 3, name:"Javascript", stats: 50},
                        {id: 4,name:"PHP", stats: 50},];
    const Techs = [{id: 1, name:"React", stats: 10},
                        {id: 2, name:"Laravel", stats: 40},
                        {id: 3, name:"Tailwind", stats: 50},
                        {id: 4,name:"MySql", stats: 70},
                        {id: 4,name:"Git", stats: 40},];
    const Year3 = [
                      {id: 1, course: "Advance Web", grades: 90},
                      {id: 2, course: "Mobile Programming", grades: 90},
                      {id: 3, course: "Capstone 1", grades: 89},
                      {id: 4, course: "System Architecture", grades: 84},
                      {id: 5, course: "Social & Professional", grades: 90},
                      {id: 6, course: "Bussiness Process Outsourcing", grades: 85},
                      {id: 7, course: "Teaching Profession", grades: 86},];
    const bookShelf1 = [
                        {id: 1, name: "Introduction to Information System", author: "George Reynolds"},
                        {id: 2, name: "Computer Ornagization", author: "Pankaj Sharma"},
                        {id: 3, name: "Java Programming ", author: "Piyush Choudhary"}
    ];

    const [isVisible, setVisible] = useState(false)
    const handleClick = () => { 
      setVisible(false)
    }

    const [isListVisible, setListVisible] = useState(false)
    const handleListClick = () => {
      setListVisible(false)
    }

    const [isReportVisible, setReportVisible] = useState(false)
    const handleReportClick = () => {
      setReportVisible(false)
    }

    const [isVisible2, setVisible2] = useState(false)
    const handleClick2 = () => { 
      setVisible2(false)
    }

    const [isActivityHide, setActivityHide] = useState(false);
    const handleActivityHide = () => {
      setActivityHide(false);
    }

    const [isuseEffect, setUseEffect] = useState(false)
    const handleUseEffect = () => {
      setUseEffect(false)
    }

  
  return (
    <div>
    
       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Header />
       </div>

      <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
        <h2>Components , Props</h2>
        <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
      </div>
     
        
      {isVisible && 
      <div>


        <Info />
        <div className='card-con'>
          <Card />
        </div>

        <div>
          <h2></h2>
          <Student name="Vuevue" age={`${1} month`}/>
        </div>

        <div>
          <Greetings isLoggedIn={true}/>
        </div>

        <div className='main-list-con'>
          <div>
            {languages.length > 0 && <List items={languages} category="Programming Languages"/>}
          </div>
          <div>
            {Techs.length > 0 && <List items={Techs} category="Frameworks & Tools"/>}
          </div>
          <div>
            {Year3.length > 0 && <Courses items={Year3} year="3" sem="2nd"/>}
          </div>
        
          <div>
            {bookShelf1.length > 0 && <Books items={bookShelf1} section="CICS"/>}
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
          <ProfilePicture />
          <ProfilePicture />
          
        </div>
      <Button/>

      <div className='list-con' style={{padding:'10px'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
          <h2>📝 To-Do List</h2>
          <button
          onClick={() => setListVisible(!isListVisible)}>{isListVisible ? 'Hide' : 'Show'}</button>
        </div>

        {isListVisible && <TaskList tasks={tasks} onMarkDone={handleMarkDone} /> }
        
      </div>

      
      
      <div className='list-con' style={{padding:'10px'}}>
         <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
          <h2>📝 Progress Report</h2>
        <button onClick={() => setReportVisible(!isReportVisible)}>{isReportVisible ? 'Hide' : 'Show'}</button>
        </div>
        {
          isReportVisible && 
        <ReportList works={works} onMarkComplete={handleWorkDone} />

        }
      </div>

      <br /><hr /><br />
      


      </div>
      }

      <div >
        <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
          <h2>UseState</h2>
          <button onClick={() => setVisible2(!isVisible2)}>{isVisible2 ? 'Hide' : 'Show'}</button>
        </div>
        
        {isVisible2 &&
          <div className='list-con'>
            <Sample1/>
          <hr />
            <Counter/>
            
          <hr />
            <SampleOnChange/>
            <hr />
            <ColorPicker/>
            <hr />
            <Updater/>
            <hr />
            <p>Update Object using State</p>
            <Objects/>
            <hr />
            <p>Update Array of Objects using State</p>
            <Arrays/>
            <hr />
            <Todo/>
          </div>
        }

        <hr />
        <div className='todolist-con'>
          <div className='flex justify-between'>
            <h2 className='text-4xl'>Activity</h2>
            <button onClick={() => setActivityHide(!isActivityHide)} className='text-white '>{isActivityHide ? 'Hide' : 'Show'}</button>
          </div>

          <hr />
          {isActivityHide && <TodoList/>}
        </div>
      </div>

      <br /><hr />

      <div className='flex justify-around'>
        <h2 className='text-2xl bg-gray-600'>useEffect</h2>
        <button onClick={() => setUseEffect(!isuseEffect)}>{!isuseEffect ? 'Hide' : 'Show'}</button>
      </div>

      {isuseEffect &&
      <div className='border border-gray-300 mt-5 p-2 rounded-lg'>
        <Component1 />
      </div>
      }

      <br />
      <div className='border '></div>
      <StopWatch/>
      <Footer />
    </div>

  )

}




export default App