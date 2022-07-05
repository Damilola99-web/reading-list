import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const { error, isPending, login, googleSignUp, githubSignUp } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				{error && <button>{error}</button>}
				<label>
					<span>email:</span>
					<input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
				</label>
				<label>
					<span>password:</span>
					<input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
				</label>

				{!isPending && <button>log in</button>}
				{isPending && <button>pending</button>}
			</form>
			<button onClick={() => googleSignUp()}>Login with google</button>
			<button onClick={() => githubSignUp()}>Login with github</button>
		</div>
	);
}
