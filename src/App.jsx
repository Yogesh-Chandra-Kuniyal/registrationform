import { useEffect, useState } from "react";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import Display from "./Display";

function App() {
  const [showUsers, setShowUsers] = useState(false);

  const fetchUsers = () => {
    setShowUsers(!showUsers)
  }

  return (
    <>
      <div className="seeAllDetails bg-gray-100 flex justify-end p-3 sticky top-0 z-50">
        <button
          onClick={fetchUsers}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 w-48">
            {showUsers ? "Register Yourself Too" : "See All User"}
          </button>
      </div>

      {!showUsers && 
        <SignUpForm />
      }


      {showUsers && 
        <Display />
      }
    </>
  )
}

export default App;