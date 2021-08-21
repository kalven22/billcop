import { useState } from "react";

const Bill = (props) => {
  var payStatus = props.status === "1" ? true : false;
  
  const [isPaid, setPaid] = useState(payStatus);
  const [alertDisplay, setAlertDisplay] = useState(false);

  // console.log(clickCount)
  const markPaid = () => {
    if (isPaid) {
      setAlertDisplay(true)
      setTimeout(()=> {setAlertDisplay(false)}, 500)
    }
    else {
      setPaid(true)
    }
  }

  return (
    <button className="Bill py-2 px-6 rounded-md shadow-md bg-white" onClick={markPaid}>
      <div className="text-lg flex justify-between space-x-1">
        <div className={`uppercase font-semibold ${alertDisplay ? 'text-green-600' : 'text-gray-800'}`}>
          {alertDisplay ? 'Already Paid!' : props.name}
        </div>
        <div className={`text-white ${isPaid ? 'bg-green-600 rounded-full' : 'bg-red-500 rounded-full'} h-7 w-7 flex justify-center`}>
          {isPaid ? "P" : "NP"}
        </div>
      </div>
    </button>
  );
};

export default Bill;