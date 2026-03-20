import { useSession } from "@tanstack/react-start/server";

type AuthSession = {
	accessToken: string;
	refreshToken: string;
	idToken: string;
	user: {
		id: string;
		email: string;
		name: string;
	};
};
export function useAuthSession() {
	return useSession<AuthSession>({
		password: process.env.SESSION_SECRET!,
		name: "auth-session",
		cookie: {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
		},
	});
}
