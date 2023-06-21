import React, { useRef, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { BudPayButton, closeBudPayPaymentModal } from 'budpay-react-v2'

export default function Home() {
  const [email, setEmail] = useState()
  const [amount, setAmount] = useState()
  const [firstName, setFirstName] = useState()
  const [last_name, setLastName] = useState()
  const [currency, setCurrency] = useState()

  const config = {
    api_key: 'sk_test_ewkdhitfcdqup2fbn7apffamryvafb0vudgomlj', // Replace with your secret key
    reference: '', // Please replace with a reference you generated. or remove the line entirely so our API will generate one for you
    email: email,
    amount: amount,
    first_name: firstName,
    last_name: last_name,
    currency: currency, // Use GHS for Ghana Cedis or USD for US Dollars
  }

  const budPayConfig = {
    ...config,
    text: 'Pay with BudPay',
    btnSize: 'medium', // small, medium, large
    callback_url: 'localhost:3000',
    callback: function (response) {
      closeBudPayPaymentModal() // this will close the modal programmatically
      // this happens after the payment is completed successfully if callback_url is not provided
      alert(
        'Payment complete! Reference: ' +
          response.reference +
          ', Status: ' +
          response.status,
      )
    },
    onClose: function (response) {
      console.log(response)
      alert('Transaction was not completed, window closed.')
    },
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1>PayForm</h1>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="currency">Currency</label>
          <select
            name="current"
            id="currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="NGN" key="NGN">
              NGN
            </option>
            <option value="GHS" key="GHS">
              GHS
            </option>
            <option value="USD" key="USD">
              USD
            </option>
          </select>

          <BudPayButton {...budPayConfig} />
        </form>
      </div>
    </main>
  )
}
