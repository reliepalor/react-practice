import { useState} from 'react';

const Button = () => {
    const [isliked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!isliked)
    }

    return (
        <div>
            <button onClick={() => setLiked(!isliked)}>{isliked ? 'liked👍' : 'like' }</button>
        </div>
    )
}

export default Button