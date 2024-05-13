

import Ticket from "@/app/components/Ticket";



export default function Home() {
  return (
    <>
    <div className="border-solid border-Hotpink border-2 rounded-3xl p-8 w-7/12 m-auto mt-10">
      <h1 className="text-White">CHOOSE YOUR TICKET:</h1>
        <div className="flex justify-start p-8 gap-96">
    
          <div className="text-White">
            <h2>FOO TICKET</h2>
            <p>799 DKK</p>
            <br />
            <h2>VIP TICKET</h2>
            <p>1299 DKK</p>
          </div>
    
      
          <div>
            <Ticket />
          </div>
        </div>
    </div>
    </>
  );
}







