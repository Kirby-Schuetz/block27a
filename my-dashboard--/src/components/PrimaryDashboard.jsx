import { useState } from "react";



export default function PrimaryDashboard() {
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try {
            return (
                setSuccessMessage("Good job!")
            )
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div 
        className="dash-container">
            <h1>Transactions</h1>
            <h4>Transactions!</h4>
            <button onClick={handleClick}>Click!</button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )
}