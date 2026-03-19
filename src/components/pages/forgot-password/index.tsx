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

export function ForgotPasswordPage({
	...props
}: React.ComponentProps<typeof Card>) {
	return (
		<Card {...props}>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Hello !</CardTitle>
				<CardDescription>Get code in your Email</CardDescription>
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
							<Button type="submit">Get Code</Button>
							<FieldDescription className="text-center">
								Already have an account? <Link to="/login">Login</Link>
							</FieldDescription>
						</Field>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
