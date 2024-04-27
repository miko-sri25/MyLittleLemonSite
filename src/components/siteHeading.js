import headerImg from '../assests/food/header_main.jpg'
import './siteHeading.css'

const SiteHeading = () => {
    return (
        <header>
            <div className="main">
                <div className="main-text">
                    <h1 id='sh1'>Little Lemon</h1>
                    <h2 id='sh2'>Chicago</h2>
                    <p id='sp'>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <button id='button'><a href="/reservations">Reserve a table</a></button>
                </div>
                <div className="main-image">
                    <img src={headerImg} alt="Little Lemon restaurant cuisine" />
                </div>
            </div>
      </header>
    );
}
export default SiteHeading;