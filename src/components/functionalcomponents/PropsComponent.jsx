import "../css/PropsComponents.css"; 

 function PropsComponent(props)
{
//     const styleAttrs ={
//         backgroundColor:"pink",
//         color:"blue"
//     }
    return(
        <div>
        {/* // <div style={styleAttrs}> */}
            {/* <div style={{color:"purple"}}> */}
            <h1>Hello,I am {props.name}<br></br>{props.role}</h1>
        </div>
    );
}
export default PropsComponent;
//const fC= ReactDOM.createRoot(document.getElementById('root'))
//fC.render(
//    <TestComp/>
//)