import React from 'react';

export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: '',
            disabledButton: true,
        }
        this.isNumber=this.isNumber.bind(this);  //bind event handler.
    }
    /**
     * To handle onChange event and update the state.
     */
    handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ mobileNumber: value })
    }

    /**
     * To handle validation on event.
     */
    onKeyupChangeNumber = (e) => {
        const mobileNumber = e.target.value;
        if (mobileNumber !== "") {
            if (mobileNumber.length >= 10) {
                if (!this.validateNumber(mobileNumber)) {
                    document.getElementById('txtMobileNumber').style.border = '1px solid red';
                    this.setState({ disabledButton: true })
                }
                else {
                    document.getElementById('txtMobileNumber').style.border = '';
                    this.setState({ disabledButton: false })
                }
            }
            else {
                document.getElementById('txtMobileNumber').style.border = '';
                this.setState({ disabledButton: true })
            }
        }
        else {
            document.getElementById('txtMobileNumber').style.border = '';
            this.setState({ enableButton: true })
        }
    }

    /**
     * to return whether number is validated or not.
     */
    validateNumber = (number) => {
        var re = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        return re.test(number);
    }

    /**
     * To handle onKeyPress and allow only number.
     */
    isNumber(e) {
        if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
            e.preventDefault();
        }
    }
    
    render() {
        const { mobileNumber, disabledButton } = this.state;
        return (
            <div>
                <div className="input-cont">
                    <input className="form-control" type='text' id='txtMobileNumber' value={mobileNumber} onChange={this.handleChange} onKeyUp={this.onKeyupChangeNumber} maxLength='10'
                        placeholder='Enter Mobile Number' onKeyPress={this.isNumber} onPaste={this.handleChange}/>
                </div>
                <label></label>
                <div className="button-cont">
                    <button className={disabledButton ? 'btn btn-disabled' : 'btn btn-primary'} disabled={disabledButton} onClick={() => this.props.saveDetails(mobileNumber)}>{'Wow! Get my Patym Card >'}</button>
                </div>
            </div>
        )
    }
}