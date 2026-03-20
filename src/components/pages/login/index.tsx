import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";

export function LoginPage({ ...props }: React.ComponentProps<typeof Card>) {
	return (
		<Card {...props}>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Welcome back</CardTitle>
				<CardDescription>Login with your Email</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</Field>
						<Field>
							<div className="flex items-center justify-between">
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Link to="/forgot-password">Forgot your password?</Link>
							</div>
							<Input id="password" type="password" required />
						</Field>
						<Field>
							<Button type="submit">Login</Button>
							<FieldDescription className="text-center">
								Don&apos;t have an account? <Link to="/signup">Sign up</Link>
							</FieldDescription>
						</Field>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
