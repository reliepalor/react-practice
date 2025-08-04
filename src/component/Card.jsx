import { useState } from 'react'
import vue from '../assets/images/vuevue.png'

const Card = () => {
    const [hasHeart, sethasHeart] = useState(false);
    return (
        <div className="card">
            <img src={vue} alt="vuevue" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Vuevue</h2>
                <button onClick={() => sethasHeart(!hasHeart)}>{hasHeart ? '❤️' : '🤍'}</button>
            </div>
            
            <p>Our vuevue is so cutecute</p>
        </div>
    )
}

export default Card