import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  // const user = useSelector(selectUser)
  const dispatch = useDispatch();
  
  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
  }

  return (
    <div className='header'>
        <div className="header_left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />  

          <div className="header_search">
            <SearchIcon/>
            <input placeholder='Search' type="text" />
          </div>
        </div>

        <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={GroupIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={MessageIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notification'/>
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header