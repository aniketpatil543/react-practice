import axios from "axios";
import { useState } from "react";

export default function Form1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });

    const [errors,setError] =useState({})
    const [isValid,setIsValid]=useState(false)
    const [loading,setLoading]=useState(false);

     const validateForm = (field, value) => {
        let newErrors = { ...errors };

        if (field === "name" || field === "all") {
            if (!formData.name.trim()) {
                newErrors.name = "Full Name is required";
            } else {
                delete newErrors.name;
            }
        }

        // Email
        if (field === "email" || field === "all") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Invalid email format";
            } else {
                delete newErrors.email;
            }
        }

        // Password
        if (field === "password" || field === "all") {
            if (formData.password.length < 6) {
                newErrors.password = "Password must be at least 6 characters";
            } else {
                delete newErrors.password;
            }
        }

        if (field === "confirmPass" || field === "all") {
            if (formData.password !== formData.confirmPass) {
                newErrors.confirmPass = "Passwords do not match";
            } else {
                delete newErrors.confirmPass;
            }
        }

        setError(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    };


    const submitForm=async()=>{
        validateForm("all")
        const res=axios.post("https://dummyjson.com/auth/login",{
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  });
        console.log("response",res)
    }

    return (
        <div className="h-screen w-screen bg-blue-100 flex justify-center items-center relative">
            
            {/* Card */}
            <div className="bg-slate-500 p-16 rounded-lg border-4 border-white shadow-2xl z-50">
                <div className="font-bold text-2xl text-center text-white">
                    Registration Form
                </div>

                {/* form */}
                <div className="pt-10">

                    <div className="flex flex-col mb-5">
                        <label className="text-white mb-1">Name</label>
                        <input
                            className="rounded-lg h-10 w-72 px-3"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            type="email"
                            placeholder="Enter email"
                        />
                        {errors.name && <p className="text-red-300">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mb-5">
                        <label className="text-white mb-1">Email</label>
                        <input
                            className="rounded-lg h-10 w-72 px-3"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            type="email"
                            placeholder="Enter email"
                        />
                         {errors.email && <p className="text-red-300">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mb-5">
                        <label className="text-white mb-1">Password</label>
                        <input
                            className="rounded-lg h-10 w-72 px-3"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            type="password"
                            placeholder="Enter password"
                        />
                        {errors.password && <p className="text-red-300">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col mb-5">
                        <label className="text-white mb-1">Confirm Password</label>
                        <input
                            className="rounded-lg h-10 w-72 px-3"
                            value={formData.confirmPass}
                            onChange={(e) =>
                                setFormData({ ...formData, confirmPass: e.target.value })
                            }
                            type="password"
                            placeholder="Confirm password"
                        />
                        {errors.confirmPass && <p className="text-red-300">{errors.confirmPass}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-row justify-center">
                        {
                            loading ? (
                                <button
                        // disabled={!isValid}
                        className={`w-full py-2 mt-3 font-bold rounded 
                        "bg-green-500" : "bg-gray-300 cursor-not-allowed"}
                        `}
                    >
                        Loading
                    </button>
                            ): (
                                <button
                        // disabled={!isValid}
                        className={"w-full py-2 mt-3 font-bold rounded bg-green-500"}
                        
                        onClick={submitForm}
                    >
                        Submit
                    </button>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}
