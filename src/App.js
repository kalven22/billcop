import { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Bill from "./components/Bill";
import Edit from "./components/Edit";
import { Auth } from "aws-amplify";

Amplify.configure(config);

// const useToggle = (initialState = false) => {
//   // Initialize the state
//   const [state, setState] = useState(initialState);
  
//   // Define and memorize toggler function in case we pass down the comopnent,
//   // This function change the boolean value to it's opposite value
//   const toggle = useCallback(() => setState(state => !state), []);
  
//   return [state, toggle]
// }

function App() {
  const [bills, setbills] = useState([]);
  const [currentUser, setUser] = useState({});

  useEffect(()=>{
    Auth.currentUserInfo().then((res) => {
      // console.log(res);
      setUser({
        username: res.username,
        userid: res.id
      });
    });
  },[]);

  useEffect(() => {
    API.get("billcoprestapi", "/items/name").then((res) => {
      setbills(res);
    });

  }, [bills]);

  const [deleteMode, setDeleteMode] = useState(false);

  
  const toggleDeleteMode = () => {
    // debugger;
    console.log("i am invoked");
    console.log(deleteMode);
    setDeleteMode(!deleteMode);
    
  };
 

  const addBill = (newBill) => {
    // API.post("billcoprestapi", "/items", {
    //   body: {
    //     name: newBill,
    //     ispaid: 0,
    //     owner: currentUser.username
    //   },
    // }).then(() => {
    //   setbills([...bills, newBill]);
    // });
  };
  const deleteBill = (name, status, owner) => {
    // API.del("billcoprestapi", "/items", {
    //   body: {
    //     name: name,
    //     ispaid: status,
    //     userid: currentUser.userid
    //   },
    // }).then(() => {
    //   setbills([...bills, name]);
    // });

    // API.del("billcoprestapi", `/items/${name}`, {}).then(() => {
    //   // setbills([...bills, name]);
    // }).catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <div className="App max-w-7xl mx-auto p-10 space-y-6">
      <Edit
        deleteMode={deleteMode}
        addBill={addBill}
        toggleDeleteMode={toggleDeleteMode}
      />

      {deleteMode && (
        <div className="text-center font-semibold lowercase text-xl font-sans text-purple-600">
          Tap to Remove
        </div>
      )}

      <div className="bill grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {bills.filter((bill) => {
          return bill.owner === currentUser.username;
        }).map((bill, index) => (
          <Bill
            key={index}
            name={bill.name}
            status={bill.ispaid}
            owner = {currentUser.username}
            deleteMode={deleteMode}
            deleteBill={deleteBill}
          />
        ))}
      </div>

      <div className="max-w-sm mx-auto bg-gray-700">
        <AmplifySignOut buttonText="Log Me out !" />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
