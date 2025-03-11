import React from 'react';


class UserC extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:5
    }
    console.log("one");

    }

    componentDidMount() {
        console.log("three");
    }



  render() {
    console.log("two");
    return (
      <div className="border-2 border-black border-solid h-[100px] w-[100px]">
        <h1>UserC</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{ this.setState({ count: this.state.count + 1 });                   }}>+</button>
        <button onClick={()=>{ this.setState({ count: this.state.count -1 });                   }}>-</button>
      </div>
    );
  }
}

export default UserC;