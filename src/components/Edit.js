import { useState } from "react";

const Edit = () => {

    const [displayForm, setFormDisplay] = useState(false);
    const [newBill, setNewBill] = useState('')


    const addBill = () => {
        if (displayForm) {
            closeForm();
            console.log();
        }
        else {
            setFormDisplay(true)
        }
    };

    const closeForm = () => {
        setFormDisplay(false);
    };

    const formSubmit = () => {
        closeForm();
        console.log(newBill);

        //Write to database -- need to be implemented

    };

    const handleInputChange = (e) =>{
        setNewBill(e.target.value)
    }

    return (
        <>
            <div className="Edit flex justify-between">
                <button className={`text-white font-semibold px-5 py-1 text-lg rounded-full shadow-xl ${displayForm ? 'bg-red-500' : 'bg-gray-700'}`} onClick={addBill}>{displayForm ? 'x' : '+'}</button>
                <button className="text-white font-semibold px-5 py-1 text-lg bg-gray-700 rounded-full shadow-xl">-</button>
            </div>

            {displayForm &&
                (<form className="font-sans flex justify-start text-xl" onSubmit={formSubmit}>
                    {/* <label className="mr-2">
                        New Bill Name:
                        <input type="text" onChange={handleInputChange} />
                    </label> */}
    
                    <input className="mr-2 text-sans p-2 rounded-md" placeholder="Enter new subscription" type="text" onChange={handleInputChange} />
 
                    <input className="bg-gray-500 text-white px-4 text-lg rounded-full shadow-xl" type="submit" value="+" />
                </form>)
            }
        </>
    );

}

export default Edit;