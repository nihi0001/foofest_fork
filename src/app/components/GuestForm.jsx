"use client"

export default function GuestForm() {
  return (
    <div>
      <h2>Guest</h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">     
      <form className="space-y-4">
      <label for="last">Country:</label>
      <input className="rounded-md p-2 border-2 border-Hotpink"
  type="country" 
  id="country" 
  name="country" 
  placeholder="Denmark"
  required
  />
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label for="first">First name:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="first-name" 
  name="first-name" 
  placeholder="First name"
  required
  />
</div>

<div class="w-full md:w-1/2 px-3">
  <label for="last">Last name:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="last-name" 
  name="last-name"
  placeholder="last name"
  required 
  />
</div>
</div>

  <label for="last">Address:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="address" 
  name="address" 
  placeholder="Address"
  required
  />

  <label for="last">Postal code:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="postal" 
  name="postal" 
  placeholder="postal code"
  required
  />

  <label for="last">City:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="city" 
  name="city" 
  placeholder="Paris"
  required
  />

  <label for="last">Email:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="email" 
  id="email" 
  name="email" 
  placeholder="example@gmail.com"
  required
  />

  <label for="last">phone number:</label>
  <input className="rounded-md p-2 border-2 border-Hotpink"
  type="text" 
  id="phone" 
  name="phone" 
  placeholder="12 23 34 45"
required
  />

</form>
      </div>
    </div>
  )
}


