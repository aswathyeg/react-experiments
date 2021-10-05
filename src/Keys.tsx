export default function Keys(){
    const numbers=[1,2,3,5];
    const doubled=numbers.map((number)=>number*2);

console.log(doubled)
    return(
        <div>
            <ul>{numbers}</ul>
 
 <ul>{doubled}</ul>
        </div>
    )
}