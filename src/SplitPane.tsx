import React from 'react'
function Contacts(): JSX.Element{
    return(
        <div className="Contacts" />
    )
}
function Chat(): JSX.Element{
    return <div className="Chat" />;
}
   

function SplitPane(props:any): JSX.Element{
    return(
        <div className="SplitPane">
<div className="SplitPane-left">
    {props.left}
</div>
<div className="SplitPane-right">
    {props.right}
</div>
        </div>
    )
}
export default SplitPane;