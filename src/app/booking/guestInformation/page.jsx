// guest information / form

import GuestForm from "@/app/components/GuestForm";



export default function page() {
  return (
    <div className="text-White">
      <div className="text-White bg-Darkblue p-12 m-16 mt-20 rounded-md border-2 border-Hotpink">
      <h1 className="text-4xl font-semibold mb-12">INFORMATION</h1>
      <div className="mb-6">
        <GuestForm/>
      </div>
<div>
   <GuestForm/>
</div>
</div>
    </div>
  )
}


