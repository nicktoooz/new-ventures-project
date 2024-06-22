'use client'
import axios from "axios";
import {useState} from "react";
import {SuccessMessage} from "@/app/(components)/SuccessMessage";

// @ts-ignore
export default function Quote({visible, onClose}) {

    const [name, setName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [suburb, setSuburb] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [service, setService] = useState('')
    const [details, setDetails] = useState('')
    const [success, setSuccess] = useState(false)

    return visible && (
        <div
            onClick={() => {
                onClose()
                resetForm()
            }}

            className={`fixed top-0 left-0 w-full h-screen bg-[#00000080] px-5 z-[25] flex justify-center md:items-center `}>
            <SuccessMessage visible={success} onClose={() => {
                setSuccess(false)
                location.href = '/'
            }}/>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`flex flex-col max-w-[35em] mt-16 md:mt-0 h-fit bg-[#ced7f8]  flex-1 w-full p-4 rounded-xl gap-3 shadow items-center`}>
                <h1 className={`text-4xl font-semibold self-start`}>Send a Quote</h1>
                <form action="#" className={`flex flex-col items-center gap-3 w-full`}>
                    <div className="relative w-full">
                        <input value={name} onChange={e => setName(e.target.value)} type="text"
                               className="rounded-md w-full px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Name :
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input value={streetAddress} onChange={e => setStreetAddress(e.target.value)}
                               type="text"
                               className=" w-full rounded-md px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Street Address :
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input value={suburb} onChange={e => setSuburb(e.target.value)} type="text"
                               className=" w-full rounded-md px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Suburb :
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input value={emailAddress} onChange={e => setEmailAddress(e.target.value)}
                               type="text"
                               className=" w-full rounded-md px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Email :
                        </label>
                    </div>
                    <div className="relative w-full">
                        <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} type="tel"
                               className="  w-full rounded-md px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Mobile Number :
                        </label>
                    </div>

                    <div className="relative w-full">
                        <input value={service} onChange={e => setService(e.target.value)} type="text"
                               className="  w-full rounded-md px-2 pb-2 pt-2 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                               placeholder=" "
                               required
                        />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Service/s Required:
                        </label>
                    </div>

                    <div className="relative w-full">
                    <textarea value={details} onChange={e => setDetails(e.target.value)}
                              className=" h-24  w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                              placeholder=" "
                              required
                    />
                        <label htmlFor="Name"
                               className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Please provide any other relevant details.
                        </label>
                    </div>
                    <button onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (name && streetAddress && suburb && emailAddress && mobileNumber && service && details) {
                            axios.post("/api/send-mail", {
                                "name": name,
                                "streetAddress": streetAddress,
                                "suburb": suburb,
                                "email": emailAddress,
                                "mobileNumber": mobileNumber,
                                "service": service,
                                "details": details
                            }).then(res => {
                                resetForm()
                                setSuccess(true)
                                console.log("success")
                                console.log(res.data)
                            }).catch(err => {
                                console.log("error")
                            })
                        } else {
                            console.log('err')
                        }

                    }} className={`bg-[#5465FF] rounded-md max-w-64 w-full p-3 text-white`}
                            type={`submit`}
                    > Send
                        Message
                    </button>
                </form>
            </div>
        </div>
    )

    function resetForm() {
        setName("")
        setStreetAddress("")
        setSuburb("")
        setEmailAddress("")
        setMobileNumber("")
        setService("")
        setDetails("")
    }
}
