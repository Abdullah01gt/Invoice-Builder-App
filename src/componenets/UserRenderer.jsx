export default function UserRenderer(props){
    return(
        <div>
            <div className="grid grid-cols-2 gap-3 w-[900px]  m-auto">
                <div><span className="font-bold">Customer's Name: </span>{props.customer.userName}</div>
                <div><span className="font-bold">Invoice Number: </span>{props.customer.invoiceNumber}</div>
                <div><span className="font-bold">Customer's Address: </span>{props.customer.userAddress}</div>
                <div><span className="font-bold">Invoice Date: </span>{props.customer.invoiceDate}</div>

            </div>
        </div>
    )
}