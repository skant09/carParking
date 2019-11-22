import React, {Component} from 'react';
import { connect } from 'react-redux'
import {filterCars, addCar} from './reducer';
import {Modal, Button} from 'react-bootstrap';
export {default as reducer} from './reducer';

class ParkingControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: {},
      openModal: false,
    };
  }
  openModal = e => {
    this.setState({openModal: true})
  }

  closeModal = e => {
    this.setState({openModal: false})
  }

  changeReg = e => {
    let filter = {...this.state.filter, reg:  e.target.value}
    this.setState({filter});
  }

  changeColor = e => {
    let filter = {...this.state.filter, color:  e.target.value}
    this.setState({filter});
  }

  updateCarReg = e => {
    let car = {...this.state.car, reg:  e.target.value}
    this.setState({car});
  }
  updateCarColor = e => {
    let car = {...this.state.car, color:  e.target.value}
    this.setState({car});
  }

  saveCar = e => {
    this.props.addCar(this.state.car);
    this.closeModal();
  }

  render() {
    const props = this.props;
    return (<div>
      <div>
        <div style={{width: "50%", display: 'inline-block'}}>
          <p>{"Total Parking : " + (props.totalParking || 0)} </p>
          <p>{"Available Parking :" + (props.availableParking || 0)} </p>
          <p>{"Available Parking :" + (props.availableParking || 0)} </p>
        </div>
        <div style={{width: "50%", display: 'inline-block'}}>
          <button>Query Data</button>
          <button onClick={this.openModal}>Park a car Data</button>  
        </div>
      </div>
      <div style={{float: 'right'}}>
        <input placeholder="TYPE REG. NO" value={props.filter.reg} onChange={this.changeReg}/>
        <select defaultValue="1" onChange={this.changeColor}>
          <option disabled value="1">Choose Color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
        </select>
        <button onClick={props.applyFilter(this.state.filter)}>Search</button>
        <button onClick={props.reset}>Reset</button>
      </div>
      <Modal centered  size="sm" show={this.state.openModal}>
        <Modal.Dialog show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <input placeholder="Reg No" value={this.state.car && this.state.car.reg || ""} onChange={this.updateCarReg} />
              <input placeholder="Color" value={this.state.car && this.state.car.color || ""} onChange={this.updateCarColor} />
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onClick={this.saveCar}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>)
  }
}
const mapStateToProps = (state) => console.log(state) || ({
  filter: state.filter || {},
  availableParking: state.cars.emptySlots.length,
  moneyCollected: 0
})

const mapDispatchToProps = dispatch => ({
  applyFilter: payload => e => dispatch(filterCars(payload)),
  reset: payload => e => dispatch(filterCars({})),
  addCar: payload => console.log(payload) || dispatch(addCar(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkingControl);