"use client";

import { useState } from 'react';

async function FormSubmit(formData) {
  const headersList = {
    "Accept": "*/*",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Zm1pZmhrYmFtd21hZ25xaHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMjUwNzUsImV4cCI6MjAzMTcwMTA3NX0.4uzJxDYPdBPq_wYwJAZgUgePZwcAkGYMD04j2J296Vk",
    "prefer": "return=representation",
    "Content-Type": "application/json"
  };

  const bodyContent = JSON.stringify(formData);

  try {
    let res = await fetch("https://uvfmifhkbamwmagnqhri.supabase.co/rest/v1/FooFestBooking", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    if (!res.ok) {
      const errorDetail = await res.json();
      throw new Error(`Error: ${res.status} - ${res.statusText}: ${JSON.stringify(errorDetail)}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
}

export default function GuestForm() {
  const [state, setState] = useState({ message: '', pending: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, pending: true });

    const formData = {
      email: event.target.email.value,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      address: event.target.address.value,
      country: event.target.country.value,
      postalcode: event.target.postalcode.value,
      city: event.target.city.value,
      phonenumber: event.target.phonenumber.value
    };

    try {
      const response = await FormSubmit(formData);
      setState({ message: 'Form submitted successfully!', pending: false });
    } catch (error) {
      setState({ message: `Form submission failed: ${error.message}`, pending: false });
    }
  };

  return (
    <section className="">
      <h2 className="mb-4">Guest 1</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="text-md text-Hotpink py-4">
          {state.message}
        </div>
        
        <div>
          <label>
            <span>Email</span>
            <input
              className="border-2 p-2 rounded-md w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              required
              type="email"
              placeholder="Email"
              name="email"
            />
          </label>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label>
              <span>First name</span>
              <input
                className="border-2 p-2 rounded-md block w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
                required
                type="text"
                placeholder="First name"
                name="firstname"
              />
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label>
              <span>Last name</span>
              <input
                className="border-2 p-2 rounded-md block w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
                required
                type="text"
                placeholder="Last name"
                name="lastname"
              />
            </label>
          </div>
        </div>

        <div className="">
          <label>
            <span>Country</span>
            <select
              className="border-2 p-2 rounded-md w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              name="country"
            >
              <option value="Denmark">Denmark</option>
              <option value="Sweden">Sweden</option>
              <option value="Norway">Norway</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            <span>Address</span>
            <input
              className="border-2 p-2 rounded-md w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              required
              type="text"
              placeholder="Address"
              name="address"
            />
          </label>
        </div>

       

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label>
              <span>Postal code</span>
              <input
                className="border-2 p-2 rounded-md block w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
                required
                type="text"
                placeholder="Postal code"
                name="postalcode"
                maxLength="4"
              />
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label>
              <span>City</span>
              <input
                className="border-2 p-2 rounded-md block w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
                required
                type="text"
                placeholder="City"
                name="city"
              />
            </label>
          </div>
        </div>

        <div>
          <label>
            <span>Phone number</span>
            <input
              className="border-2 p-2 rounded-md w-full hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              required
              type="text"
              placeholder="Phone number"
              name="phonenumber"
            />
          </label>
        </div>

        <div>
          <button
            aria-disabled={state.pending}
            type="submit"
            className=" text-center text-White p-2 mt-6 rounded-lg bg-Hotpink hover:bg-Lightpink w-60"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
