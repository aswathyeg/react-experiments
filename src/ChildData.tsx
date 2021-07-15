


function ChildData(props:any) {
    let childCounterValue = props.counterValue;
   
    return (
      <div>
        <button onClick={() => props.callbackFunc(++childCounterValue)}>
          Increment Counter
        </button>
      </div>
    );
   }export default ChildData;