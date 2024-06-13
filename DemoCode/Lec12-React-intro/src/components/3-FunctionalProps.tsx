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

// Parameters that are automatically passed in
// props : Properties passed to the component from its parent
// props.children : Child Nodes

const Props = (props: IProps) => {
  console.log(props);
  const { strProp, numProp, arrProp, objProp } = props;

  return (
    <div>
      <h2>Funtional Component Props</h2>
      <p>String Prop: {strProp}</p>
      <p>Number Prop: {numProp}</p>
      <p>Array Prop: {arrProp}</p>
      <p>Object Prop: {JSON.stringify(objProp)}</p>
    </div>
  );
};

export default Props;
