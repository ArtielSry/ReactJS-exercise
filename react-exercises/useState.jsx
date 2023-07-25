
import {useState} from 'react';

const Likes = () => {
        console.log('likes')
        const [likes, setLikes] = useState({val: 0 })
        return (<>
                <ButtonAdd 
                    onClick={() => {
                        const newLikes = {...likes}
                        newLikes.val ++;
                        setLikes(newLikes)
                    }}>like
                </ButtonAdd>
                <p>{likes.val} likes</p>
                </>
        )
    }
    
const ButtonAdd = ({onClick, children}) => {
        return <button onClick={onClick}>{children}</button>
    }

const useStateWay = () => {

  return (
    <>
      <Likes likes={0}/> 
    </>
  )
}

export default useStateWay
