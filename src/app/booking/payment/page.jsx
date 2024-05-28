import CardPayment from '@/app/components/CardPayment'
import React from 'react'

export const metadata = {
  title: "FooFest | Payment details",
  description: "Complete your ticket purchase for FOO Festival 2024 by entering your credit card details",
};


export default function page() {
  return (
    <div>
      <CardPayment/>
    </div>
  )
}


