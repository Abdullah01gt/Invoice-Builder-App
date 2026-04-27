import { useState } from 'react'
import UserForm from './componenets/UserForm.jsx'
import InvoiceForm from './componenets/InvoiceForm.jsx'
import GrandTotal from './componenets/GrandTotal.jsx'
import InvoiceRenderer from './componenets/InvoiceRenderer.jsx'
import UserRenderer from './componenets/UserRenderer.jsx'




function App() {
                
  const [user,setUser] = useState({})
  const [invoices,setInvoices] = useState([])
  const [exportPdf,setExportPdf] = useState(false)

  function updateUser(name,address,number,date){
    const newUser = {
      userName:name,
      userAddress:address,
      invoiceNumber:number,
      invoiceDate:date
    }

    setUser(prev => ({newUser}))

   
  }

  function emptyUser(){
    setUser({})
    setInvoices([])
  }

  function updateInvoice(invName,invQty,invUnitPrice){
       const newInvoice = {
        invoiceName:invName,
        invoiceQty:invQty,
        invoicePrice:invUnitPrice,
        invoiceTotal:invQty*invUnitPrice
       }

       setInvoices(prev => ([...prev,newInvoice]))

     
  }

  function removeItem(index){
    setInvoices(invoices.filter((prev,i) => i!==index))
  }

  function generatePdf(){
    setExportPdf(true)
   
  }

  

  return (
   <div>
    <div>
    <header className="h-[100px]">
       <h2 className="text-3xl font-bold font-[System_Ui] text-center p-[30px]">Invoice builder App</h2>
     </header>
     <div>
      {user.newUser?<div>
      <UserRenderer customer={user.newUser}/>
      <InvoiceForm action={updateInvoice}/> 
       
       <InvoiceRenderer allInvoices={invoices} deleteItem={removeItem}/> 
       

       <GrandTotal totalItems={invoices} pdfGeneration={generatePdf} currentUser={user.newUser} deleteUser={emptyUser}/> 
       </div>:
       <UserForm action={updateUser}/>}
      
       
     
      
      
     </div>

     
   </div>
   </div>
  )
}

export default App
