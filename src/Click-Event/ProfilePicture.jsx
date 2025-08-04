import { useState} from 'react'

const ProfilePicture = () => {

    const [isVisible, setVisible] = useState(true)
    const imageUrl = './src/assets/images/croc.jpg'
    
    const handleClick = () => {
        setVisible(false)
    }
    return ( 
        <>
            <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
            {isVisible && 
                <img src={imageUrl} 
                id="croc" alt="Profile Picture"
                width={150} style={{padding: "10px"}}
            /> }
        </>
    )

}

export default ProfilePicture;
