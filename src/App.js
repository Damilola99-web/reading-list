import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { ResrtictedRoute } from './pages/RestrictedRoute';

function App() {
	const { user, authIsReady } = useAuthContext();
	return (
		<div className="App">
			<Router>
				{authIsReady && <Navbar />}
				<Routes>
					<Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
					<Route path="/signup" element={<ResrtictedRoute><Signup /></ResrtictedRoute>} />
					<Route path="/login" element={<ResrtictedRoute><Login /></ResrtictedRoute>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
