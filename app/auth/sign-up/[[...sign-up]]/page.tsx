import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
  <>
  SIGN UP PAGE
  <SignUp path="/auth/sign-up" />;
  </>
  )
}