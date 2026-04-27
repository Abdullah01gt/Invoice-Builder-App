export default function List(props){
    
    const heading = props.category;
    const itemLists = props.items
    const listItems = itemLists.map(itemList => <li key={itemList.id}>{itemList.name}</li>)

    return(
        <div>
        <h1>{heading}</h1>
       <ul>
        {listItems}
       </ul>
       </div>
    )
}