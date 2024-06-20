import './Footer.scss'


export const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h1>Blogr</h1>
                </div>
                <div className="footer-links">
                    <div className="footer-link">
                        <h2>Features</h2>
                        <a href="#">Link Shortening</a>
                        <a href="#">Branded Links</a>
                        <a href="#">Analytics</a>
                    </div>
                    <div className="footer-link">
                        <h2>Resources</h2>
                        <a href="#">Blog</a>
                        <a href="#">Developers</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-link">
                        <h2>Company</h2>
                        <a href="#">About</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;
