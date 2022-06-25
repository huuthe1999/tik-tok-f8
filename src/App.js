import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
	const routesPublic = useRoutes(publicRoutes);
	return <div className='App'>{routesPublic}</div>;
}

export default App;
