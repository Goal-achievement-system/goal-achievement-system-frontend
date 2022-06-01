export default function isLoggedIn() {
	if (!localStorage.getItem('goalKeeperToken')) return false;
	return true;
}
