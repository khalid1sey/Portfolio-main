  <header>

    <!--===========================nav menu======================================-->
		<div class="navbar">
      <div class="logo-wrap">
        <a href="#"  id="logo"><h3>Khalilio</h3></a>
      </div>

			<nav class="navigation" id="navigation">      
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="ri-menu-2-fill" id="ham-menu"></i></a>
          <div class="nav-link">
              <a href="#" class="navlink"></a>
			        <a href="#" class="navlink">Home</a>
			        <a href="#" class="navlink">About</a>
			        <a href="#" class="navlink">Projects</a>
			        <a href="#" class="navlink">Contact</a>
			        <a href="#" class="navlink">Blog</a>
          </div>  
			</nav>
		</div>
        <!--===========================nav menu======================================-->
	</header>

    #logo {
        font-size: xx-large;
        font-weight: 700;
      }
      
      .logo-wrap a {
        overflow: hidden;
      }
      
      /* ========================= nav bar======================*/
      
      
      .navbar, .logo-wrap, .navigation {
        border: 1px solid white;
      }
      
      .navigation div.nav-link {
          display: flex;
          color: #000;
          text-align: center;
          padding: 14px 16px;
          font-size: 17px;      
          gap: 10px;
          font-size: 20px;
          margin: 20px;
        }
        
        .navigation .nav-link a:hover {
          background-color: white;
          color: black;
        }
        
        .navigation .icon {
          display: none;
        }
      
      

    @media screen and (max-width: 650px) {

        /*_______
          NAVBAR
          ______*/
      
        div.navbar div.logo-wrap {
          width: 100%;
        }
      
        div.navbar div.logo-wrap h3 {
          margin: 2px 5px;
          padding: 2px 5px;
      
        }
      
          .navigation a:not(:first-child) {display: none;}
      
          .navigation a.icon {
          float: right;
          display: block;
          justify-content: space-between;
          
        }
      
        .navbar.responsive {
          display: block;
      
        }
        .navigation.responsive .icon {
      
          float: right;
          
        }
        .navigation.responsive .nav-link a {
          float: right;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }
      
        .navigation.responsive .nav-link {
          display: block;
          flex-direction: column;
          width: 100%;
          align-items: center;
          justify-content: center;
          height: 5rem;
        }
      
       .navigation.responsive #ham-menu {
      
       }
        
        #ham-menu {
          font-size: 30px;
          
        }
      
        .ham-menu {
          display: block;
        }
      
        .navigation {
            justify-content: center;
            align-items: center; 
          
            
        }
      
        #hero {
            display: block;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin: 0;
        }
      
      }


      function myFunction() {
        var x = document.getElementById("navigation");
        var navLinks = document.querySelector(".nav-link");
        var icon = document.getElementById("ham-menu");
        
        if (x.className === "navigation") {
          x.className += " responsive";
          navLinks.style.display = "block";
          icon.classList.remove("ri-menu-2-fill");
          icon.classList.add("ri-close-fill");
        } else {
          x.className = "navigation";
          navLinks.style.display = "flex";
          icon.classList.remove("ri-close-fill");
          icon.classList.add("ri-menu-2-fill");
        }
      }