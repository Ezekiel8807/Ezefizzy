import './header.css'



const Header = () => {

    const openNav = () => {

        let menu = document.getElementById('header-menu');
    
        if(menu.style.display === 'block'){
            menu.style.display = 'none';
        }else {
            menu.style.display = 'block';
        }
    }

    const closeNav = () => {

        let menu = document.getElementById('header-menu');
    
        if(menu.style.display === 'block'){
            menu.style.display = 'none';
        }else {
            menu.style.display = 'block';
        }
    }

    return(
        <header>

            <div className="nav-menu">
                <div onClick = { openNav } id="open-btn" className="button">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="logo">
                <p><a href="/"> _AE.</a></p>
            </div>

            <nav id="header-menu">
                <div className="close-btn">
                    <div onClick = { closeNav } id="close-btn"  className="button">
                        <div className="close-bar"></div>
                        <div className="close-bar"></div>
                    </div>
                </div>

                <a href="/">Home</a>
                <a href="/explore">Explore</a>
                <a href="/articles">Articles</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;