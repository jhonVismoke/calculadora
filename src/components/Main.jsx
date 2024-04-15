import videoBG from '../assets/pinterest-video76.mp4'
import './MainStyle.css'

const Main = () => {
  return (
    <div className='main'>
        <video src={videoBG} autoPlay loop muted />
    </div>
  )
}

export default Main