import {useState} from 'react'


const Courses = (props) => {
    const Year = props.year;
    const Sem = props.sem;
    const courseList = props.items;

    const courseItems = courseList.map(items => <li key={items.key} style={{color: items.grades >= 90 ? 'green' : 'pink'}}>
                                                    {items.course}: &nbsp;
                                                    {items.grades}%
                                                </li>)
    const [isPassed, seIsPassed] = useState(false);
    return (
        <div className="list-con">
            <div>
                <h3>Year: {props.year}</h3>
                <h3>Semester: {props.sem}</h3>
            </div>
            
            <div className="list">
                <ul>{courseItems}</ul>
            </div>
            <button onClick={() => seIsPassed(!isPassed)}>{isPassed ? 'Passed✅' : 'Passed'}</button>
        </div>
    )
}

export default Courses