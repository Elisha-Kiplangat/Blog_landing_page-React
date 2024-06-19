import './StateDesc.scss'
import image from '../assets/illustration-phones.svg'

export const StateDesc = () => {
  return (
    <>
        <div className="desc-container">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="desc">
                <h2>State of the Art Infrastructure</h2>
                <p>
                    With reliability and speed in mind, worldwide data centers provide the<br/>
                    backbone for ultra-fast connectivity. This ensures your site will load <br/>
                    instantly.
                </p>
            </div>
        </div>

    </>
  )
}


export default StateDesc;
