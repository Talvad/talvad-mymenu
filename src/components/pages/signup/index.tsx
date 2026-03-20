import { useSearch } from "@tanstack/react-router";
import { ConfirmSignupForm } from "./confirm-signup-form";
import { SignupForm } from "./signup-form";

export function SignupPage() {
	const { email } = useSearch({ from: "/(auth)/_auth/signup" }) as {
		email: string | undefined;
	};
	if (email) {
		return <ConfirmSignupForm email={email} />;
	}
	return <SignupForm />;
}
