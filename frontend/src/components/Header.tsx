import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from './Shared/Logo'

const Header = () => {
  return (
    <AppBar sx={{ bgColor: "transparent", position: "static", boxShadow: "none"}}>
      <Toolbar sx={{ display: "flex"}}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}

export default Header