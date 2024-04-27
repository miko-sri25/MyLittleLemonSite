import './footer.css'
import footerLogo from '../assests/litlle-lemon-logo.png'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="one">
                <img src={footerLogo} alt="Secondary Logo"/>
            </div>
            <div className="two" >
                <ul >
                    <h2>Navigation</h2>
                    <li>
                        <a className="a" href="/">Home</a>
                    </li>
                    <li>
                        <a className="a" href="/about">About</a>
                    </li>
                    <li>
                        <a className="a" href="/menu">Menu</a>
                    </li>
                    <li>
                        <a className="a" href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a className="a" href="/order">Order Online</a>
                    </li>
                    <li>
                        <a className="a" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className="three" >
                <ul>
                    <h2>Contact</h2>
                    <li><a id="nav" href="/phone">Phone Number</a></li>
                    <li><a id="nav" href="/email">Email</a></li>
                    <li><a id="nav" href="/address">Address</a></li>
                </ul>
            </div>
            <div className="four">
                <ul>
                    <h2>Social Media</h2>
                    <li><a id="nav" href="/insta">Instagram</a></li>
                    <li><a id="nav" href="/linkedin">LinkedIn</a></li>
                    <li><a id="nav" href="/pinterest">Pinterest</a></li>
                </ul>
            </div>
        </div>
    </>
  );
}
export default Footer