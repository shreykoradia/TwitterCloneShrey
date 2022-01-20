import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions.js';
import "./Sidebar.css"; 
import  HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'; 
import NotificationNoneIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter ICon*/}
                <TwitterIcon  className="sidebar__twitter"/>
                {/*  Sidebar options*/}
                <SidebarOptions  active Icon={HomeIcon} text="Home" />
                <SidebarOptions Icon={SearchIcon}text="Explore" />                
                <SidebarOptions Icon={NotificationNoneIcon} text="Notification" />                
                <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
                <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOptions Icon={ListAltIcon} text="Lists" />
                <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
                <SidebarOptions Icon={MoreHorizIcon} text="More" />

                {/*tweeet button  */}
             <Button variant='outlined'className="sidebar__tweet" >Tweet</Button>


        </div>
    )
}

export default Sidebar
