import {SignIn} from '@clerk/nextjs';

export default function Page(){
    return (
        <>
        <div>ITS A SIGN IN PAGE</div>
        <SignIn path='/auth/sign-in' />
        </>
    )
}