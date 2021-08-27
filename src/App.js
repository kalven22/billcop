import { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Bill from "./components/Bill";
import Edit from "./components/Edit";
import { Auth } from "aws-amplify";

Amplify.configure(config);

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
    console.log("i am invoked");
    setDeleteMode(!deleteMode);
    console.log(deleteMode);
  };

  const addBill = (newBill) => {
    API.post("billcoprestapi", "/items", {
      body: {
        name: newBill,
        ispaid: 0,
        owner: currentUser.username
      },
    }).then(() => {
      setbills([...bills, newBill]);
    });
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
            deleteMode={deleteMode}
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
