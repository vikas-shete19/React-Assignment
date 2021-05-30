import React from 'react';
import DetailPage from './DetailPage';
import Success from './Success';
import card from '../src/images/card.jpg';
import footericon from '../src/images/icon.png'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlreadyExists: null
        }
    }

    componentDidMount() {
        const isLocalStorageAvailable = localStorage.getItem('mobileNumber');
        this.setState({ isAlreadyExists: isLocalStorageAvailable })
        
    }
    
    /**
     * To handle onClick event and update the localStorage value.
     */
    saveDetails = number => {
        debugger;
        localStorage.setItem('mobileNumber', number);
        setTimeout(()=>{this.setState({ isAlreadyExists: localStorage.getItem('mobileNumber') })},1000);   
    }

    render() {
        const { isAlreadyExists } = this.state;
        return (
            <div className="row">
                <div className="col-md-4 mx-auto col-xs-12 gift-card-container">
                    <img className="card-image" src={card} alt="giftcard" />
                    <div>
                        You have Won Patym Gift Card of Rs 200 for <b>placing the order on Paytm.</b>
                    </div>
                    <div className="gift-card-coupon-container">
                        {
                            isAlreadyExists !== null ?
                                <Success />
                                :
                                <DetailPage saveDetails={this.saveDetails} />
                        }
                    </div>
                    <div className="footer">
                        Powered by <img className="icon-image" src={footericon} alt="footer logo"/>
                    </div>
                </div>
            </div>
        )
    }
}