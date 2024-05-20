//form component
"use client"

import { useRouter } from "next/router"
import { useState } from "react"

export default function GuestForm() {



const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [country, setCountry] = useState('Denmark')
const [useremail, setEmail] = useState('')
const [postalcode, setPostal] = useState('')
const [address, setAddress] = useState('')
const [city, setCity] = useState('')
const [phonenumber, setPhone] = useState('')
const [isLoading, setIsLoading] = useState('false')

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  const info = {
    firstname, lastname, country, useremail, address, postalcode, city, phonenumber: 'janedoe@gmail.com'
  }

  const res = await fetch ('',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
body: JSON.stringify(info)
    }
  )

  if (res.status === 201) {
    router.push('/tickets')
  }
}

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

   

 <form onSubmit={handleSubmit} className="w-1/2">
 <h2>Guest 1</h2>
 <label>
  <span>Country:</span>
<select className="rounded-md p-3 border-2 w-60 border-Hotpink text-Darkblue"
  onChange={(e) => setCountry(e.target.value)}
  value={country} 
>
  <option value="Denmark">Denmark</option>
  <option value="Sweden">Sweden</option>
  <option value="Norway">Norway</option>
</select>
</label>
<label>
  <span>First name:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="text"
  placeholder="Jane"
  onChange={(e) => setFirstName(e.target.value)}
  value={firstname} 
  />
</label>
<label>
  <span>Last name:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="text"
  placeholder="Doe"
  onChange={(e) => setLastName(e.target.value)}
  value={lastname} 
  />
</label>
<label>
  <span>Email:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="Email"
  placeholder="example@gmail.com"
  onChange={(e) => setEmail(e.target.value)}
  value={useremail} 
  />
</label>
<label>
  <span>Postal code:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="numeric"
  placeholder="2950"
  onChange={(e) => setPostal(e.target.value)}
  value={postalcode} 
  />
</label>
<label>
  <span>Address:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="text"
  placeholder="Address"
  onChange={(e) => setAddress(e.target.value)}
  value={address} 
  />
</label>
<label>
  <span>City:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink text-Darkblue" 
  required
  type="text"
  placeholder="Paris"
  onChange={(e) => setCity(e.target.value)}
  value={city} 
  />
</label>
<label>
  <span>Phone number:</span>
  <input className="rounded-md p-2 border-2 border-Hotpink  text-Darkblue" 
  required
  type="numeric"
  placeholder="+45 12 34 56 78"
  size="11" 
  onChange={(e) => setPhone(e.target.value)}
  value={phonenumber} 
  />
</label>

<button className="text-center text-Darkblue p-4 mt-8 rounded-3xl bg-Lightpink hover:bg-Hotpink text-white w-80"
disabled={isLoading}
>
{isLoading && <span>Add</span>}
{!isLoading && <span>Submit Information...</span>}
</button>
 </form>
 </div>
  )
}


