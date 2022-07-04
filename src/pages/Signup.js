import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error, isPending, signup} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }
  
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {isPending && <button>Pending</button>}
        {error && <button>{error}</button>}
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
      </form>
    </div>
  )
}
