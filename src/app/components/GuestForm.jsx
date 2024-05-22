"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export async function getInfo() {
  let headersList = {
    "Accept": "*/*",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Zm1pZmhrYmFtd21hZ25xaHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMjUwNzUsImV4cCI6MjAzMTcwMTA3NX0.4uzJxDYPdBPq_wYwJAZgUgePZwcAkGYMD04j2J296Vk"
  };

  let response = await fetch("https://uvfmifhkbamwmagnqhri.supabase.co/rest/v1/FooFestBooking", { 
    method: "GET",
    headers: headersList
  });

  let data = await response.text();
  console.log(data);
}

export default function GuestForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [country, setCountry] = useState('Denmark');
  const [useremail, setEmail] = useState('');
  const [postalcode, setPostal] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const info = {
      firstname,
      lastname,
      country,
      useremail,
      postalcode,
      address,
      city,
      phonenumber
    };

    let bodyContent = JSON.stringify(info);
    let headersList = {
      "Accept": "*/*",
      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Zm1pZmhrYmFtd21hZ25xaHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMjUwNzUsImV4cCI6MjAzMTcwMTA3NX0.4uzJxDYPdBPq_wYwJAZgUgePZwcAkGYMD04j2J296Vk",
      "prefer": "return=representation",
      "Content-Type": "application/json"
    };

    try {
      let response = await fetch("https://uvfmifhkbamwmagnqhri.supabase.co/rest/v1/FooFestBooking", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      if (response.status === 201) {
        router.push("/orderConfirmation"); // Redirect to a success page or another route after successful submission
      } else {
        console.error('Failed to submit:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="m-6">
        <h2 className="mb-4">Guest 1</h2>
        <label>
          <span>Country</span>
          <select
            className="rounded-md p-3 border-2 w-60 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            <option value="Denmark">Denmark</option>
            <option value="Sweden">Sweden</option>
            <option value="Norway">Norway</option>
          </select>
        </label>
        <div>
          <label>
            <span>First name</span>
            <input
              className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              required
              type="text"
              placeholder="Jane"
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </label>
          <label>
            <span>Last name</span>
            <input
              className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
              required
              type="text"
              placeholder="Doe"
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </label>
        </div>
        <label>
          <span>Email</span>
          <input
            className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            required
            type="email"
            placeholder="example@gmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={useremail}
          />
        </label>
        <label>
          <span>Postal code</span>
          <input
            className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            required
            type="text"
            placeholder="2950"
            name="postal"
            maxLength="4"
            onChange={(e) => setPostal(e.target.value)}
            value={postalcode}
          />
        </label>
        <label>
          <span>Address</span>
          <input
            className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            required
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </label>
        <label>
          <span>City</span>
          <input
            className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            required
            type="text"
            placeholder="Paris"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            className="rounded-md p-2 border-2 hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink text-Darkblue"
            required
            type="text"
            placeholder="+45 12 34 56 78"
            name="phonenumber"
            onChange={(e) => setPhone(e.target.value)}
            value={phonenumber}
          />
        </label>
        <button
          type="submit"
          className="text-center text-White p-2 mt-6 rounded-lg bg-Hotpink hover:bg-Lightpink w-60"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Information'}
        </button>
      </form>
    </div>
  );
}
