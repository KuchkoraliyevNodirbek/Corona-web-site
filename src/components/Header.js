import React from 'react'
import Logo from '../img/logo.svg'
import dashboard from '../img/dashboard.svg'
import morelogo from '../img/morelogo.svg'
import searchlogo from '../img/searchlogo.svg'
import trilogo from '../img/trilogo.svg'
import ads from '../img/ads.png'
import next from '../img/next.png'
import hs from '../img/hs.png'
import list from '../img/list.png'
import sale from '../img/sale.svg'
import aus from '../img/aus.svg'
import world from '../img/world.png'
import "./Header.css"

function Header() {
    return (
        <div className="all">
            <div className='left'>
                <div className='title_left'>

                    <h1>Corona</h1>
                </div>
                <div className="member">
                    <div className="img">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="member_title">
                        <h3>Herry klein</h3>
                        <p>Gold member</p>
                    </div>
                </div>


                <div className="bottom_all">
                    <div className="bottom_title">
                        <p> Navigation</p>
                    </div>

                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="menu_title">
                            <p> Dashboard</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='right'>
                <div className="topleft">
                    <div className="morelogo">
                        <img src={morelogo} alt="" />
                    </div>

                    <div className="input">
                        <img src={searchlogo} alt="" />
                        <input type="text" placeholder='search products' />
                    </div>

                </div>
                <div className="topright">
                    <div className="btn">
                        <button>+ Creat New Project</button>
                    </div>
                    <div className="trilogo">
                        <img src={trilogo} alt="" />
                    </div>
                    <div className="login">
                        <img src={Logo} alt="" />
                        <p>Herry Klein</p>
                    </div>
                </div>

            </div>
            <div className="rightall">

                <div className="right_bottom">


                    <div className="startimg">
                        <img src={ads} alt="" />
                    </div>
                    <div className="starttitle">
                        <h3>Start 30 days free trails!</h3>
                        <p>By downloading the onstallers,you agree to agreee to accept the term of service and privacy policy.</p>
                    </div>
                    <div className="startbtn">
                        <button>Trail Download</button>

                    </div>
                </div>
                <div className="statistic">
                    <div className="static">
                        <div className="number">
                            <h1>$1231.34</h1>
                            <p>potential growth</p>
                        </div>
                        <div className="numberimg">
                            <img src={next} alt="" />
                        </div>
                    </div>
                    <div className="static">
                        <div className="number">
                            <h1>$1231.34</h1>
                            <p>potential growth</p>
                        </div>
                        <div className="numberimg">
                            <img src={next} alt="" />
                        </div>
                    </div>
                    <div className="static">
                        <div className="number">
                            <h1>$1231.34</h1>
                            <p>potential growth</p>
                        </div>
                        <div className="numberimg">
                            <img src={next} alt="" />
                        </div>
                    </div>
                    <div className="static">
                        <div className="number">
                            <h1>$1231.34</h1>
                            <p>potential growth</p>
                        </div>
                        <div className="numberimg">
                            <img src={next} alt="" />
                        </div>
                    </div>


                </div>
                <div className="project">
                    <div className="projectleft">
                        <h3>Transaction History</h3>
                        <img src={hs} alt="" />
                        <div className="transfer">
                            <div className="tleft">
                                <h4>transfer to paypal</h4>
                                <p>047 jan 2019, 09;15 pm</p>
                            </div>
                            <div className="tright">
                                <p>$236</p>
                            </div>

                        </div>
                        <div className="transfer">
                            <div className="tleft">
                                <h4>transfer to paypal</h4>
                                <p>047 jan 2019, 09;15 pm</p>
                            </div>
                            <div className="tright">
                                <p>$236</p>
                            </div>

                        </div>
                    </div>
                    <div className="projectright">
<div className="projecttitle">
   <div className="pleft"> <h2>Open Project</h2></div>
   <div className="pright"><p>your data status</p></div>
</div>
<div className="list">
    <div className="lleft">
<div className="limg">
<img src={list} alt="" />
</div>
<div className="ltitle">
<h2>Admin dashboard design</h2>
<p>Broadcast web app mockup</p>
</div>
    </div>
    <div className="lright">
        <p>15 minuts ago <br/>30 tasks 5 issue</p>
    </div>
</div>
<div className="list">
    <div className="lleft">
<div className="limg">
<img src={list} alt="" />
</div>
<div className="ltitle">
<h2>Admin dashboard design</h2>
<p>Broadcast web app mockup</p>
</div>
    </div>
    <div className="lright">
        <p>15 minuts ago <br/>30 tasks 5 issue</p>
    </div>
</div>
<div className="list">
    <div className="lleft">
<div className="limg">
<img src={list} alt="" />
</div>
<div className="ltitle">
<h2>Admin dashboard design</h2>
<p>Broadcast web app mockup</p>
</div>
    </div>
    <div className="lright">
        <p>15 minuts ago <br/>30 tasks 5 issue</p>
    </div>
</div>
<div className="list">
    <div className="lleft">
<div className="limg">
<img src={list} alt="" />
</div>
<div className="ltitle">
<h2>Admin dashboard design</h2>
<p>Broadcast web app mockup</p>
</div>
    </div>
    <div className="lright">
        <p>15 minuts ago <br/>30 tasks 5 issue</p>
    </div>
</div>
<div className="list">
    <div className="lleft">
<div className="limg">
<img src={list} alt="" />
</div>
<div className="ltitle">
<h2>Admin dashboard design</h2>
<p>Broadcast web app mockup</p>
</div>
    </div>
    <div className="lright">
        <p>15 minuts ago <br/>30 tasks 5 issue</p>
    </div>
</div>
                    </div>
                </div>
            </div>

<div className="sales">
    <div className="sale">
        <div className="sleft">
            <p>Revenue</p>
            <h2>$32595</h2>
            <p>11.38% since last month</p>
        </div>
        <div className="sright">
<img src={sale} alt="" />
        </div>
    </div>
    <div className="sale">
        <div className="sleft">
            <p>Revenue</p>
            <h2>$32595</h2>
            <p>11.38% since last month</p>
        </div>
        <div className="sright">
<img src={sale} alt="" />
        </div>
    </div>
    <div className="sale">
        <div className="sleft">
            <p>Revenue</p>
            <h2>$32595</h2>
            <p>11.38% since last month</p>
        </div>
        <div className="sright">
<img src={sale} alt="" />
        </div>
    </div>
</div>
<div className="orders">
 <div className="ordertitle">
    <p>Client name</p>
    <p>Client name</p>
    <p>Client name</p>
    <p>Client name</p>
    <p>Client name</p>
    <p>Client name</p>
    <p>Client name</p>
 </div>
   <div className="client">
    <div className="cmember">
        <img src={Logo} alt="" />
        <h4>harry klein</h4>
    </div>
    <h4>02312</h4>
    <h4>$14.500</h4>
    <h4>dashboard</h4>
    <h4>credit cards</h4>
    <h4>04 december 2019</h4>
    <div className="btnc">
    <button>Aproved</button>
    </div>
  
    </div> 
    <div className="client">
    <div className="cmember">
        <img src={Logo} alt="" />
        <h4>harry klein</h4>
    </div>
    <h4>02312</h4>
    <h4>$14.500</h4>
    <h4>dashboard</h4>
    <h4>credit cards</h4>
    <h4>04 december 2019</h4>
    <div className="btnc">
    <button>Aproved</button>
    </div>
  
    </div> 
    <div className="client">
    <div className="cmember">
        <img src={Logo} alt="" />
        <h4>harry klein</h4>
    </div>
    <h4>02312</h4>
    <h4>$14.500</h4>
    <h4>dashboard</h4>
    <h4>credit cards</h4>
    <h4>04 december 2019</h4>
    <div className="btnc">
    <button>Aproved</button>
    </div>
  
    </div> 
    <div className="client">
    <div className="cmember">
        <img src={Logo} alt="" />
        <h4>harry klein</h4>
    </div>
    <h4>02312</h4>
    <h4>$14.500</h4>
    <h4>dashboard</h4>
    <h4>credit cards</h4>
    <h4>04 december 2019</h4>
    <div className="btnc">
    <button>Aproved</button>
    </div>
  
    </div> 
    <div className="client">
    <div className="cmember">
        <img src={Logo} alt="" />
        <h4>harry klein</h4>
    </div>
    <h4>02312</h4>
    <h4>$14.500</h4>
    <h4>dashboard</h4>
    <h4>credit cards</h4>
    <h4>04 december 2019</h4>
    <div className="btnc">
    <button>Aproved</button>
    </div>
  
    </div> 
</div>

<div className="world">
    <div className="wleft">
        <h2>Visitoris by Countries</h2>
        <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div>
        <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div> <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div> <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div> <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div> <div className="countries">
            <div className="count">
                <img src={aus} alt="" />
                <p>Australia</p>
            </div>
            <div className="countright">
                <p>1500</p>
                <p>56.35%</p>
            </div>
        </div>
    </div>
    <div className="wright">
    <img src={world} alt="" />
    </div>
</div>
<div className="end">
    <p>Copyright © 2019 UrbanUI. All rights reserved.</p>
    <p>Hand-crafted & made with Love</p>
</div>
        </div>



    )
}

export default Header