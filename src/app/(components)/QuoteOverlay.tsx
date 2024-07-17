'use client';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SuccessMessage } from '@/app/(components)/SuccessMessage';

interface Errors {
  name?: string;
  streetAddress?: string;
  suburb?: string;
  emailAddress?: string;
  mobileNumber?: string;
  service?: string;
  details?: string;
}

export default function Quote({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [name, setName] = useState<string>('');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [buttonMessage, setButtonMessage] = useState<string>('Send Message');
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = (): Errors => {
    let errors: Errors = {};
    if (!name) errors.name = 'Name is required';
    if (!streetAddress) errors.streetAddress = 'Street Address is required';
    if (!suburb) errors.suburb = 'Suburb is required';
    if (!emailAddress) errors.emailAddress = 'Email is required';
    if (!mobileNumber) errors.mobileNumber = 'Mobile Number is required';
    if (!service) errors.service = 'Service is required';
    if (!details) errors.details = 'Details are required';
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      setButtonMessage('Sending...');
      axios
        .post('/api/send-mail', {
          name: name,
          streetAddress: streetAddress,
          suburb: suburb,
          email: emailAddress,
          mobileNumber: mobileNumber,
          service: service,
          details: details,
        })
        .then((res) => {
          setName('');
          setStreetAddress('');
          setSuburb('');
          setEmailAddress('');
          setMobileNumber('');
          setService('');
          setDetails('');
          setButtonMessage('Send Message');
          setSuccess(true);
          console.log('success');
          console.log(res.data);
        })
        .catch((err) => {
          console.log('error');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value);
  };

  return (
    visible && (
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (buttonMessage === 'Send Message') {
            onClose();
            resetForm();
          }
        }}
        className={`fixed top-0 left-0 w-full h-screen pt-[4em]  bg-[#00000080] p-5 z-[25] flex justify-center md:items-center `}
      >
        <SuccessMessage
          visible={success}
          onClose={() => {
            setSuccess(false);
            location.href = '/';
          }}
        />
        <form action={`#`} className={`flex flex-col bg-[#dddddd] max-h-full h-fit overflow-y-scroll  max-w-[50em] flex-1 w-full p-10 rounded-xl gap-5 shadow items-center`} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <h1 className={`text-4xl font-semibold self-start`}>Send a Quote</h1>
          <div className="relative w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Your name
            </label>
            <input value={name} onChange={handleChange(setName)} type="text" id="name" className={`bg-${name ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.name && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${name && (errors.name = '')}`} placeholder="John" />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.name}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-900">
              Street Address
            </label>
            <input value={streetAddress} onChange={handleChange(setStreetAddress)} type="text" id="streetAddress" className={`bg-${streetAddress ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.streetAddress && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${streetAddress && (errors.streetAddress = '')}`} placeholder="123 Main St" />
            {errors.streetAddress && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.streetAddress}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="suburb" className="block text-sm font-medium text-gray-900">
              Suburb
            </label>
            <input value={suburb} onChange={handleChange(setSuburb)} type="text" id="suburb" className={`bg-${suburb ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.suburb && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${suburb && (errors.suburb = '')}`} placeholder="Downtown" />
            {errors.suburb && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.suburb}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input value={emailAddress} onChange={handleChange(setEmailAddress)} type="email" id="emailAddress" className={`bg-${emailAddress ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.emailAddress && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${emailAddress && (errors.emailAddress = '')}`} placeholder="john.doe@example.com" />
            {errors.emailAddress && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.emailAddress}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-900">
              Mobile Number
            </label>
            <input value={mobileNumber} onChange={handleChange(setMobileNumber)} type="tel" id="mobileNumber" className={`bg-${mobileNumber ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.mobileNumber && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${mobileNumber && (errors.mobileNumber = '')}`} placeholder="123-456-7890" />
            {errors.mobileNumber && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.mobileNumber}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="service" className="block text-sm font-medium text-gray-900">
              Service Required
            </label>
            <input value={service} onChange={handleChange(setService)} type="text" id="service" className={`bg-${service ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.service && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${service && (errors.service = '')}`} placeholder="Service required" />
            {errors.service && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.service}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="details" className="block text-sm font-medium text-gray-900">
              Please provide any other relevant details
            </label>
            <textarea value={details} onChange={handleChange(setDetails)} id="details" className={`bg-${details ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 h-24 ${errors.details && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${details && (errors.details = '')}`} placeholder="Details" />
            {errors.details && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.details}
              </p>
            )}
          </div>

          <button className={`bg-[#2A2A27] rounded-md max-w-64 w-full p-3 text-white`} type={`submit`}>
            {buttonMessage}
          </button>
        </form>
      </div>
    )
  );

  function resetForm() {
    setName('');
    setStreetAddress('');
    setSuburb('');
    setEmailAddress('');
    setMobileNumber('');
    setService('');
    setDetails('');
  }
}
