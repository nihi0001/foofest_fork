// guest information / form 

import GuestForm from "@/app/components/GuestForm";
import Ticket from "@/app/components/Ticket";


export default function Formpage() {
  return (
    <main>
 <div className="text-White bg-Darkblue p-12 m-16 mt-20 rounded-md border-2 border-Hotpink" >
      <h1 className="text-4xl font-semibold mb-12">INFORMATION</h1>
      <div className="grid grid-cols-2">
      <div>
    <GuestForm/>
    <GuestForm/>
    </div>
    <div>
   
      </div>
    </div>
    </div>
   
  </main>
  )
}


