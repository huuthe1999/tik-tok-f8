import { useLocation } from 'react-router-dom';

export default function useDefaultLayout(path) {
	const location = useLocation();
	// Hidden Sidebar when it matches the page's path
	const hiddenSidebar = location.pathname === path;
	return hiddenSidebar;
}
