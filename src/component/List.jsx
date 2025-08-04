import propTypes from "prop-types";

const List = (props) => {

    const category = props.category;
    const itemsList = props.items;

    const languagesItems = itemsList.map(items => <li key={items.key}>
                                                    {items.name}: &nbsp; 
                                                    <b>{items.stats}%</b>
                                                    </li>)
    return (
        <div  className="list-con">
            <h3>{props.category}</h3>
            <div className="list">
                <ul>{languagesItems}</ul>
            </div>
        </div>
        

    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.array
};

List.defaultProps = {
    category: "Category",
items: []
};

export default List