import { useState } from "react";

const Bill = (props) => {
  // eslint-disable-next-line
  var payStatus = props.status == "1" ? true : false;

  const [isPaid, setPaid] = useState(payStatus);
  const [alertDisplay, setAlertDisplay] = useState(false);

  // console.log(clickCount)
  const markPaid = () => {
    if (isPaid) {
      setAlertDisplay(true);
      setTimeout(() => { setAlertDisplay(false) }, 500);
    }
    else {
      setPaid(true);
    }
  }

  const handleDeleteBill = () => {
    return props.deleteBill(props.name, props.status, props.owner);
  }


  return (
    <>
      <button className={`Bill py-2 px-6 rounded-md shadow-md ${props.deleteMode ? 'bg-red-300': 'bg-white'}`} onClick={props.deleteMode ? handleDeleteBill : markPaid}>
        <div className="text-lg flex justify-between space-x-1">
          <div className={`font-semibold ${alertDisplay ? 'text-green-600 capitalize' : 'text-gray-800 uppercase'}`}>
            {alertDisplay ? 'Already Paid!' : props.name}
          </div>
          <div className={`text-white ${isPaid ? 'bg-green-600 rounded-full' : 'bg-red-500 rounded-full'} h-7 w-7 flex justify-center`}>
            {isPaid ? "P" : "NP"}
          </div>
        </div>
      </button>

    </>
  );
};

export default Bill;
