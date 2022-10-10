import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.components";
import FormInput from "../form-input/form-input.components";

import './sign-in-form.styles.scss';

const defaultFormField = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await SignInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />

                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;