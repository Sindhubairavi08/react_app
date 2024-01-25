function PropsComponent(props){
    return(
        <div>
            <h1>Hello,I am {props.name}<br></br>{props.role}</h1>
        </div>
    );
}
export default PropsComponent;
//const fC= ReactDOM.createRoot(document.getElementById('root'))
//fC.render(
//    <TestComp/>
//)