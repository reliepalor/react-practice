import { useState} from 'react'

const ProfilePicture = () => {

    const [isVisible, setVisible] = useState(true)
    const [isLiked, setLiked] = useState(false)
    const imageUrl = './src/assets/images/croc.jpg'
    
    const handleClick = () => {
        setVisible(false)
    }
    const handleLike = () => {
        setLiked(!isLiked)
    }
    return ( 
        <>
            <div className='profile-con'>
                <div>
                    <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
                    <div>
                        {isVisible && 
                            <img src={imageUrl} 
                            id="croc" alt="Profile Picture"
                            width={150} style={{padding: "10px"}}
                        /> }    
                        {isVisible && 
                            <button onClick={() => setLiked(!isLiked)}>
                                {isLiked ? 'liked👍' : 'like' }
                            </button>
                         }
                    </div>
                                   
                </div>

            </div>
            
        </>
    )

}

export default ProfilePicture;
