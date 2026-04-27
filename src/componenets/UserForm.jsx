import InputField from "./InputField.jsx";
import React,{ useState } from "react";

export default function UserForm(props){

    const [userName, setUserName] = useState("")
    const [userAddress, setUserAddress ] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [ invoiceDate, setDate] = useState("")

    function updateUserName(event){
        setUserName(event.target.value)
    }
    function updateUserAddress(event){
        setUserAddress(event.target.value)
    }
    function updateInvoiceNumber(event){
        setInvoiceNumber(event.target.value)
    }
    function updateDate(event){
        setDate(event.target.value)
    }


    function checkForm(){
        if(userName.trim() && userAddress.trim() && invoiceNumber.trim() && invoiceDate.trim()){
            return true
        }
        else{return false}
    }

    function clearValues(){
         setUserName("")
         setUserAddress("")
         setInvoiceNumber("")
         setDate("")
    
    }
    

    const isFormValid = checkForm()

    function handleSubmit(){
       if(!isFormValid) return;

       props.action(userName,userAddress,invoiceNumber,invoiceDate)

    }
    return(
        <div className="h-[70vh]">
            <div className="flex flex-col justify-center items-center h-full gap-[10px] ">
                <div><label>User Name: </label><input type="text" placeholder="Enter your value" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateUserName} type="text"  value={userName}></input></div>
                <div><label>Address:</label> <input type="text" placeholder="Enter your value" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateUserAddress} type="text"  value={userAddress}></input></div>
                <div><label>Invoice Number:</label>  <input type="text" placeholder="Enter your value" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateInvoiceNumber} type="number"  value={invoiceNumber}></input></div>
                <div><label>Invoice Date:</label>  <input  placeholder="Enter your value" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={updateDate} type="date"  value={invoiceDate}></input></div>
                <button className="bg-sky-500 hover:bg-sky-700 text-white w-[100px] rounded-lg p-2 cursor-pointer  disabled:bg-gray-300 
      disabled:cursor-not-allowed w-[350px]"
                 onClick={handleSubmit} disabled={!isFormValid}>Add Invoice</button>

            </div>
        </div>
        
    )
}