import Button from '../../../../../components/button'
import { modal } from '../../../../../stores/modal/actions'

function Auth() {
  return (
    <div>
      <Button
        onClick={() => modal.append('auth.login',{
          name: 'murathan',
          surname: 'bayram'
        }) }
        type="button">
        Giriş yap
      </Button>
    </div>
  )
}

export default Auth