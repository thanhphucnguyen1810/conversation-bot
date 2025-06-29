import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from './Shared/Logo'
import NavigationLink from './Shared/NavigationLink'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgColor: "transparent", position: "static", boxShadow: "none"}}>
      <Toolbar sx={{ display: "flex"}}>
        <Logo />
        <div>
          {auth?.isLoggedIn
            ? (
              <>
                <NavigationLink bg="#00fffc" to="/chat" text="Go To Chat" textColor='black' />
                <NavigationLink bg='#51538f' to='/' text='Logout' textColor='white' onClick={auth.logout} />
              </>
            )
            : (
              <>
                <NavigationLink bg="#00fffc" to="/login" text="Login" textColor='black' />
                <NavigationLink bg='#51538f' to='/signup' text='Signup' textColor='white'/>
              </>
            )
          }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header