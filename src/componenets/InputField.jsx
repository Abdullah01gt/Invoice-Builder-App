export default function InputField(props){
  

    return(
        <div>
            <input type="text" placeholder="Enter your value" className="block w-[350px] px-3 py-2 border border-gray-300 rounded-md 
                  text-gray-900 placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  sm:text-sm"  onChange={props.change} type={props.type} ></input>
        </div>
    )
}