"use client"
import BounceLoader from "react-spinners/BounceLoader";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <BounceLoader
      color="#D500C0"
      loading={true}
      
      size={60}
      aria-label="Loading animation"
      data-testid="loader"/>
    </div>
  )
}

export default loading

