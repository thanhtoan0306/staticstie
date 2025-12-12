// Simple authentication utility using localStorage
const AUTH_KEY = 'yen-sao-admin-auth';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1';

export interface AuthState {
	isAuthenticated: boolean;
	username: string | null;
}

export function login(username: string, password: string): boolean {
	if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
		const authData = {
			isAuthenticated: true,
			username: username,
			timestamp: Date.now(),
		};
		localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
		return true;
	}
	return false;
}

export function logout(): void {
	localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
	if (typeof window === 'undefined') return false;
	
	try {
		const authData = localStorage.getItem(AUTH_KEY);
		if (!authData) return false;
		
		const parsed = JSON.parse(authData);
		// Check if session is still valid (24 hours)
		const maxAge = 24 * 60 * 60 * 1000; // 24 hours
		if (parsed.timestamp && Date.now() - parsed.timestamp > maxAge) {
			logout();
			return false;
		}
		
		return parsed.isAuthenticated === true && parsed.username === ADMIN_USERNAME;
	} catch {
		return false;
	}
}

export function getAuthState(): AuthState {
	return {
		isAuthenticated: isAuthenticated(),
		username: isAuthenticated() ? ADMIN_USERNAME : null,
	};
}


