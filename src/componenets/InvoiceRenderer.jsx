// 

export default function InvoiceRenderer(props) {
  const allItems = props.allInvoices;

  return (
    <div className="w-full">
      <div className="w-[650px] m-auto overflow-x-auto " > 
        <table className="w-full table-fixed border-collapse my-8">
          <thead>
            <tr className="border-b border-gray-300 text-left">
              <th className="py-3 px-2 w-[220px]">Item name</th>
              <th className="py-3 px-2 w-[90px] text-center">Quantity</th>
              <th className="py-3 px-2 w-[110px] text-right">Unit Price</th>
              <th className="py-3 px-2 w-[110px] text-right">Total Price</th>
              <th className="py-3 px-2 w-[120px] text-center">Action</th>
            </tr>
          </thead>

          <tbody>

           
           {
            
           allItems.length == 0? (
              <tr>
                <td
                  colSpan={5}
                  className="py-6 px-2 text-center text-gray-500"
                >
                  No items added to invoice
                </td>
              </tr>
            ) :
            allItems.map((allItem, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-2">{allItem.invoiceName}</td>
                <td className="py-3 px-2 text-center">{allItem.invoiceQty}</td>
                <td className="py-3 px-2 text-right">₹  {allItem.invoicePrice}</td>
                <td className="py-3 px-2 text-right">₹ {allItem.invoiceTotal}</td>
                <td className="py-3 px-2 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white w-[100px] rounded-lg p-1 cursor-pointer"
                    onClick={() => props.deleteItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

            // allItems.length === 0 ? (
            //   <tr>
            //     <td
            //       colSpan={5}
            //       className="py-6 px-2 text-center text-gray-500"
            //     >
            //       No items added to invoice
            //     </td>
            //   </tr>
            //     )  : 