import React, { Component } from 'react';
class Exp extends Component {
  state = {
    exp:{
      edu:{type:"Education",list:[{id:1,degree:"Associate Degree",admission:"2014",graduation:"2016", school:"HKU School of Professional and Continuing Education", abbrev:"HKUSPACE", program:"Associate of Engineering in Computer Science"},{id:2,degree:"Bachelor Degree",admission:"2016",graduation:"2019", school:"Hong Kong University of Science and Technology", abbrev:"HKUST", program:"Bachelor of Engineering in Computer Science"}]},
      career:{type:"Career",list:[]},
      extra:{type:"Extracurricular Activities",list:[{id:1,start:"2016", end:"2019", activity:"Paddler of HKUST Dragon Boat Team"},{id:2,start:"2017", end:"2018", activity:"Vice-President of HKUST Dragon Boat Club"}]}
    } 
  };
  render() { 
    if (!this.props.option.isSelected) return null;
    return ( <div id="exp" className="page">
    <h1 className="page-title">{this.props.option.title}</h1>
  </div> );
  }
}
 
export default Exp;