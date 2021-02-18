import React from 'react';
class Customer extends React.Component{
    render() {  //render은 항상 return을 하게 되어있음 
        return(
            <div>
               <CustomerProfile img={this.props.img} name={this.props.name} id={this.props.id}/>
                <CustomerInfo birth={this.props.birth} gender={this.props.gender} job={this.props.job}/>
            </div>
        );
    }

}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}


class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>

            </div>
        )
    }

}
export default Customer;