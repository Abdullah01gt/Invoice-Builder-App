import PdfRender from './PdfRender.jsx'


export default function GrandTotal(props){
    
    var subTotal = 0
    const invoiceArr = props.totalItems; 
    const subTotalFinder = invoiceArr.map(invoice => { subTotal = subTotal + invoice.invoiceTotal})

    const tax = 0.16

    const invoice = {
  invoiceNo: props.currentUser.invoiceNumber,
  date: props.currentUser.invoiceDate,
  customer: {
    name: props.currentUser.userName,
    address:  props.currentUser.userAddress,
  },
  items: invoiceArr
};



function itemsAvailable(){
  if(invoiceArr.length > 0){
    return true
  }
  return false;
}

const itemsPresent = itemsAvailable()

function handleSubmit(){
  if(!itemsPresent) return;

  props.pdfGeneration()

}

return(<div className="pb-50">
<div className="fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
  <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
    
    <div>
      <h2 className="text-lg font-bold text-gray-800">Invoice Summary</h2>
      <p className="text-sm text-gray-500">Final amount including tax</p>
    </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-right text-gray-700 sm:text-base">
      <span className="font-semibold">SubTotal:</span>
      <span>₹{subTotal}</span>

      <span className="font-semibold">sGST:</span>
      <span>6%</span>

      <span className="font-semibold">cGST:</span>
      <span>10%</span>

      <span className="font-semibold">Added Tax:</span>
      <span>₹{Math.floor(subTotal * tax)}</span>

      <span className="font-semibold text-gray-900">Grand Total:</span>
      <span className="text-lg font-bold text-sky-600">
        ₹{Math.floor(subTotal + subTotal * tax)}
      </span>
     

      
    </div>
    <div className="flex flex-col gap-[10px]">
   {invoiceArr.length > 0? <PdfRender data={invoice}/>:
   <button className="bg-gray-300 w-[130px] cursor-not-allowed p-2 rounded-md ">Download Invoice</button>}
   <button className="bg-red-500 w-[130px] cursor-pointer p-2 rounded-md text-white" onClick={props.deleteUser}>New Invoice</button>
      </div>
  </div>
 
</div>
</div>)
}