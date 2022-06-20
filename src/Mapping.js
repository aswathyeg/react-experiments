const Mapping =(props) =>{
    return (
        <div>
<ul>
    {props.details.map((det)=>{return<li key ={det.id}>{det.title}</li>}
    )}
</ul>
        </div>
    )

}
export default Mapping;