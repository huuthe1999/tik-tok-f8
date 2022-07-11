import { useLocation, useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
	const routesPublic = useRoutes(publicRoutes);
	console.log(useLocation());
	return <>{routesPublic}</>;
}

export default App;
