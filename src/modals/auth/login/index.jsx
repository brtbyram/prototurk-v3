import { Form, Formik } from 'formik'
import ModalTitle from '../../../components/modal/header'
import Button from '../../../components/button'
import Input from '../../../components/input'
import Or from '../../../components/or'
import { modal } from '../../../stores/modal/actions'
import { loginSchema } from '../../../validations'
import { setUser } from '../../../stores/auth/actions'

function LoginModal({ destroy }) {
    return (
        <>
            <ModalTitle title="Giriş yap" />
            <Formik
                validationSchema={loginSchema}
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={values => {
                    setUser(values)
                    destroy()
                }}
            >
                <Form className='grid gap-y-4 p-4'>
                    <Input label="Kullanıcı adı" name="username" />
                    <Input label="Parola" name="password" type="password" />
                    <Button type="submit">Giriş Yap</Button>
                    <Or label="ya da" />
                    <Button variant="primary-outline" type="button" onClick={() => modal.append('auth.register')}>Hesap Aç</Button>
                </Form>
            </Formik>
        </>
    )
}

export default LoginModal