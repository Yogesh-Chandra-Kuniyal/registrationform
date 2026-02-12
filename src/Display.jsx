import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://2wtfugdqbf.execute-api.us-east-1.amazonaws.com/users")
            .then((response) => {
                setAllUser(response.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className="min-h-screen  bg-gray-100">

            <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10 sticky top-16 border-b-2 border-black z-50 h-16 bg-gray-100">
                All Users
            </h1>

            <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-0">
                {allUser.map((data) => (
                    <div
                        key={data.erpId}
                        className="bg-indigo-50/70 backdrop-blur-sm p-6 rounded-2xl 
                        shadow-md border border-indigo-100
                        hover:shadow-xl hover:-translate-y-2 
                        transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 flex items-center justify-center 
                                rounded-full bg-indigo-200 text-indigo-700 
                                font-bold text-xl">
                                {data.firstName?.charAt(0)}
                                {data.lastName?.charAt(0)}
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {data.firstName} {data.lastName}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    ERP: {data.erpId}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-indigo-100 my-3"></div>

                        <div className="space-y-3 text-gray-600">
                            <p className="flex justify-between">
                                <span>Email:</span>
                                <span className="truncate ml-2 text-gray-500">
                                    {data.email}
                                </span>
                            </p>

                            <p className="flex justify-between">
                                <span>Phone:</span>
                                <span className="text-gray-500">
                                    {data.phone}
                                </span>
                            </p>

                            <p className="flex justify-between items-center">
                                <span>Gender:</span>
                                <span className="bg-indigo-100 text-indigo-600 
                                    px-3 py-1 rounded-full text-sm">
                                    {data.gender}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Display;