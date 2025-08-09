import React, {useState} from 'react';

const SampleOnChange = () => {
    const [name, setname] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState('');
    const [writeComments, setWriteComment] = useState([]);
    const [Liked, setLiked] = useState(false);
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('')

    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    
    }

    const handleLiked = () => {
        setLiked(!Liked);
    }

    const handleWriteComment = (event) => {
        setComment(event.target.value)

    } 
    const handleComment = () => {
        if(comment.trim() === '') return;
        setWriteComment([...writeComments, {id: Date.now(), text: comment, done: false}]);
        setComment('');
    }

    const handleNameChange = (event) => {
        setname(event.target.value)
    }

    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }

    return (
        <div>
            <h2>📚Search Books</h2>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantity} />
            <p>Quantity: {quantity}</p>

            <hr />
            <h3>Comment Section</h3>

            <textarea value={comment} onChange={handleWriteComment} />
            <p>Comment: {comment}</p>
            <button onClick={handleComment}>Add Comment</button>

            <ul>
                {writeComments.map(writeComment => (
                    <li
                        key={writeComment.id}
                        onClick={() => toggleLike(writeComment.id)}
                        style={{ display:'flex', justifyContent: 'space-center', alignItems:'center'}}
                        >
                            <div style={{display:'flex', justifyContent:'space-center', marginBottom:'5px', alignItems:'center'}}>
                                  <p>{writeComment.text}</p>
                                 <button onClick={() => handleLiked(!Liked)}>{Liked ? '🤍' : '❤️'}</button>
                            </div>
                      

                    </li>
                ))}
            </ul>

        <hr />

        <select name="" id="" value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment Method</option>
            <option value="Gcash">Gcash</option>
            <option value="PayMaya">PayMaya</option>
            <option value="COD">Cash on Delivery</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
                <input type="radio" value="pickup" checked={shipping === 'pickup'} onChange={handleShippingChange}/>
            pick up
        </label>
        <br />
         <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        </div>
    )
}

export default SampleOnChange;