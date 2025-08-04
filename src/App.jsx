import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Info from './Information/Info.jsx'
import Card from './component/Card.jsx'
import Student from './component/Student.jsx'
import Greetings from './component/Greetings.jsx'
import List from './component/List.jsx'
import Courses from './component/Courses.jsx'
import Books from './Rendering-List/Books.jsx'
import Button from './Click-Event/Button.jsx'
import ProfilePicture from './Click-Event/ProfilePicture.jsx'


const App = () => {
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

    const [isVisible, setVisible] = useState(true)

    const handleClick = () => { 
      setVisible(false)
    }

  
  return (
    <div>
        <Header />
        <div>
          <h2> My First React</h2>
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

        <div className='list-con' style={{padding: "10px"}}>

          <ProfilePicture />
          <ProfilePicture />
          <ProfilePicture />
          <ProfilePicture />

      
        </div>


      <Footer />
      </div>
      }
    </div>

  )
}



export default App