// function ClassComponent
import React from "react";
class ClassComponent extends React.Component {
  // Vong doi cua component:
  // initialization: Khoi tao
  // Day la giai doan dau => Khi component duoc khoi tao
  // contructor
  constructor(props) {
    super(props);
    // Khoi tao bien count = 0
    this.state = {
      // liet ke cac bien can thiet
      count: 0,
      count1: 0,
    };
    console.log("Contructor: Component duoc khoi tao - 1 lan");
  }
  // Mounting: lap rap => duoc gan vao DOM
  // Gan khi giao dien bat dau render
  // componentDidMount
  componentDidMount() {
    console.log("Gia tri cua bien count: " + this.state.count);
    console.log("Component Did mount: Gan 1 lan duy nhat trong dom luc dau");
  }
  // neu co su thay doi gi tren dom => updating
  componentDidUpdate() {
    console.log("Component Did update: Moi lan dom thay doi");
  }
  // huy (componenet bien mat)
  componentWillUnmount() {
    console.log("Component Will unmount: Khi Component bien mat");
  }
  increaseNumber = () => {
    // thay doi 1 cai gi day => set
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <h1>Day la component con - Class Componenet</h1>
        <p>Count = {this.state.count} </p>
        <button onClick={this.increaseNumber}>Click me</button>
      </>
    );
  }
}
export default ClassComponent;
/**
 * contructor => did mount(gan vao dom) => update => unmount
 */
