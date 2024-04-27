import './foodDisplay.css'
import img1 from '../assests/food/Bruschetta.jpg'
import img2 from '../assests/food/greek-salad.jpg'
import img3 from '../assests/food/pizza.jpg'

const FoodDisplay = () =>{
    return(
        <>
            <div class="cards">
                <div class="card" style={{width: '20rem'}}>
                    <img class="card-img-top" src={img1} style={{width: 280}}/>
                    <div class="card-body" id='a'>
                        <div class="card-title h5"><b>Bruschetta</b></div>
                        <p class="card-text">Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and 
                        seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                        <button type="button" class="btn btn-primary">Order Delivery </button>
                    </div>
                </div>
                <div class="card" style={{width: '20rem'}}>
                <img class="card-img-top" src={img2} style={{width: 286}}/>
                    <div class="card-body" id='b'>
                        <div class="card-title h5"><b>Greek Salad</b></div>
                        <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons.</p>
                        <button type="button" class="btn btn-primary">Order Delivery </button>
                    </div>
                </div>
                <div class="card" style={{width: '20rem'}}>
                <img class="card-img-top" src={img3} style={{width: 310, height:212}}/>
                    <div class="card-body" id='c'>
                        <div class="card-title h5"><b>Pizza</b></div>
                        <p class="card-text">The famous Pizza made from homemade crispy crust,smeared with sauce,
                           peppers, olives, cheese and optional ingredients, 
                            garnished with crunchy garlic.</p>
                        <button type="button" class="btn btn-primary">Order Delivery </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodDisplay;