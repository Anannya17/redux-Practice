import Header from '../Components/Header'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
 cardData:state.cardItems
 
})
const mapDispathToProps = dispatch=>({
})
export default connect(mapStateToProps,mapDispathToProps)(Header)

//export default Home;