const Books = (props) => {
    const section = props.section;
    const bookItems = props.items;

    const bookList = bookItems.map(item => 
    <li key={item.id}>
        {item.name} &nbsp;
        <span>Author: {item.author}</span>
    </li>)

    return (
        <div>
            <div>
                <h3>Section: {props.section}</h3>
            </div>
            <div>
                {bookList}
            </div>
        </div>
    )
}

export default Books;