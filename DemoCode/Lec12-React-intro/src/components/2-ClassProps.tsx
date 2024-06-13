import { Component } from "react";

interface IProps {
  strProp: string;
  numProp: number;
  arrProp: number[];
  objProp: IObjProp;
}

interface IObjProp {
  a: string;
  b: number[];
}

// Defines class 'Props' that extends react.Component
// Specifies two generics: IProps, object
// "This component will recieve props of the IProps type"
// Generic Parameters : define parameters for types or values that are not specified until the component or function is used.
// ????
export default class Props extends Component<IProps, object> {
  // class component takes in props through constructor
  constructor(props: IProps) {
    super(props); // super(props) initializes props data
  }

  render() {
    console.log(this.props);
    const { strProp, numProp, arrProp, objProp } = this.props;

    return (
      <div>
        <h2>Class Component Props</h2>
        <p>String Prop: {strProp}</p>
        <p>Number Prop: {numProp}</p>
        <p>Array Prop: {arrProp}</p>
        <p>Object Prop: {JSON.stringify(objProp)}</p>
      </div>
    );
  }
}
