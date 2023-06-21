import React, { useRef } from 'react'

function PayForm({ onHandleForm }) {
  const email = useRef()
  const amount = useRef()
  const first_name = useRef()
  const last_name = useRef()
  const currency = useRef()

  //  email: 'maryadams@gmail.com',
  //   amount: '100',
  //   first_name: 'Mary',
  //   last_name: 'Adams',
  //   currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(amount.current.value)
  }
  return (
    <div>
      <h1>PayForm</h1>
      <form onSubmit={handlerSubmit} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" ref={email} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" ref={amount} />
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" id="first_name" ref={first_name} />
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" id="last_name" ref={last_name} />
        <label htmlFor="currency">Currency</label>
        <select name="current" id="currency" ref={currency}>
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

        <button type="submit" className="">
          Pay Now
        </button>
      </form>
    </div>
  )
}

export default PayForm
