import './Description.scss'
import image from '../assets/bg-pattern-circles.svg'


const Description = () => {
  return (
    <>
        <div className="description">

            <h2>Designed for the future</h2>
            <div className="container">
                <div className="text">
                <div className="part1">
                <h2>Introducing an extensible editor</h2>
                <p>
                    Blogr features an exceedinglty intuitive interface which lets you focus <br/>
                    on one thing: creating content. The editor supports management of <br/>
                    multiple blogs and allows easy manipulation of embeds such as images, <br/>
                    videos, and Markdown. Extensibility with plugins and the themes provide  <br/>
                    easy ways to add functionality or change the looks of a blog.
                </p>
                </div>
                <div className="part2">
                <h2>Robust content management</h2>
                <p>
                    Flexible content maagement enables users to easily move through <br/>
                    posts. Increase the usability of your blog by adding customized <br/>
                    categories, sections, formats, or flow. With the functionality, you're in <br/>
                    full control.
                </p>
                </div>
                </div>
                <div className="image">
                <img src={image} alt="" />
                </div>
            </div>
        </div>

    </>
  )
}

export default Description