import Path from './path';

export default function handleLogout() {
	localStorage.removeItem('goalKeeperToken');
	window.history.pushState(null, '', Path.login);
	window.location.reload();
}

export function handleAdminLogout() {
	localStorage.removeItem('adminToken');
	window.history.pushState(null, '', Path.home);
	window.location.reload();
}
