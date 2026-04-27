import React,{ useState } from "react";
import InputField from "./InputField.jsx";


export default function InvoiceForm(props){
    const [itemName,setItemName] = useState("")
    const [itemQty,setItemQty] = useState("")
    const [unitPrice,setUnitPrice] = useState("")
    

    var valuesAvailable = false;

    function updateItemName(event){
    setItemName(event.target.value)
}
function updateItemQty(event){
    setItemQty(event.target.value)
}
function updateUnitPrice(event){
    setUnitPrice(event.target.value)
}


function resetValues(){
     setItemName("")
     setItemQty("")
     setUnitPrice("")

}


    function checkEmptyValues(){
        if(itemName.trim() && itemQty.trim() && unitPrice.trim()) {
            return true
        }else{
            return false
        }
    }  

    valuesAvailable = checkEmptyValues();

    
    function handleSubmit(){
        if(!valuesAvailable)return;

        props.action(itemName, itemQty, unitPrice);
        resetValues();


    }



return(<div className="h-[50vh]">
    <div className="flex flex-col justify-center items-center h-full gap-[10px] "> 
    <div><label className="font-semibold">Item Name:</label>  <input type="text" placeholder="Enter item's name" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateItemName} type="text"  value={itemName}></input></div>
    <div><label className="font-semibold">Item Quantity:</label> <input type="text" placeholder="Enter item's quantity" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateItemQty} type="number" value={itemQty}></input></div>
    <div><label className="font-semibold">Unit Price:</label>  <input type="text" placeholder="Enter unit price" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm "  onChange={updateUnitPrice} type="number" value={unitPrice}></input></div>
    <div className=" flex flex-row justify-start">Total Price: ₹ {unitPrice * itemQty}</div>



      <button className="bg-sky-500 hover:bg-sky-700 text-white w-[100px] rounded-lg p-2 cursor-pointer disabled:bg-gray-300 
      disabled:cursor-not-allowed w-[350px]"
    onClick={handleSubmit} disabled={!valuesAvailable}  id="invoice-submit">Add Item</button>

    </div>
</div>)
}

