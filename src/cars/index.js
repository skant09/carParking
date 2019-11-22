import React from 'react';
import { connect } from 'react-redux'
import './table.css'
import {removeCar} from './reducer';
export {default as reducer} from './reducer';

const Cars = ({data, filter, removeCar}) => {
  console.log(data);
  
  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}}>
      <table style={{width: '100%'}}>
        <thead style={{background: '#ccc', border: 'none'}}>
          <tr>
            <th>#</th>
            <th><div>Car No</div></th>
            <th>Color</th>
            <th>Slot No</th>
            <th>Date Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car, index) => (
            <tr key={index}>
              <td className="sticky-left">
                {index}
              </td>
              <td>{car.reg}</td>
              <td>{car.color}</td>
              <td>{car.slot}</td>
              <td>{car.time}</td>
              <td onClick={removeCar(car)}>Remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => console.log(state) || ({
  data: state.cars.cars || []
})

const mapDispatchToProps = dispatch => ({
  removeCar: payload => e => dispatch(removeCar(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);