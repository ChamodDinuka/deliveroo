import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { ReactComponent as FaceBookIcon } from '../../icons/facebook.svg'
import { ReactComponent as AppleIcon } from '../../icons/apple.svg'
import { ReactComponent as GoogleIcon } from '../../icons/google.svg'
import { ReactComponent as EmailIcon } from '../../icons/email.svg'
import './SignUp.css'

function SignUp() {
    return (
        <div className="sign-up">
            <Stack direction="vertical" gap={2} className="inner-sign-up">
                <h1 className="heading">Sign up or log in</h1>
                <Button variant="primary" id="facebook"><FaceBookIcon height="24" width="24" /> Continue with Facebook</Button>
                <Button variant="outline-dark" id="google"><GoogleIcon height="24" width="24" /> Continue with Google</Button>
                <Button variant="dark" id="apple"><AppleIcon height="24" width="24" /> Continue with Apple</Button>
                <h6>or</h6>
                <Button variant="primary" id="email"><EmailIcon height="24" width="24" /> Continue with email</Button>
                <p>By continuing you agree to our T&Cs. Please also check out our Privacy Policy. We use your data to offer you a personalised experience and to better understand and improve our services. For more information see here.</p>
            </Stack>
        </div>
    )
}

export default SignUp