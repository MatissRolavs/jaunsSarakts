import Title from "./Title.js";
function Completed(props){
    const titleJSX = <Title title={props.title}></Title>;
    return (
        <>
        <div id="userBox">
         <input type="checkbox" id={props.id} checked={props.completed}></input>
         <label for={props.id}>{titleJSX}</label>
        </div>
        </>
    )
}
export default Completed;