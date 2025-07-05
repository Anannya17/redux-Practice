import Home from '../Components/Home'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../Services/Actions/actions'
const mapStateToProps=state=>({
})
const mapDispathToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispathToProps)(Home)

//export default Home;