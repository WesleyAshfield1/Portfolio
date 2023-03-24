new function Layout() {
    
    return(
        <html>
            <head>
            <title>Wesley Ashfield Portfolio</title>
            </head>
            <body style={{backgroundColor: '#'}}>
                <div>
                    <Navbar bg='secondary' expand='lg'>
                        <Navbar.Brand>Wesley Ashfield</Navbar.Brand>
                        <Navbar.toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-nav-bar">
                                <Nav className="mr-auto">
                                    <Nav.link href="/aboutme">About Me</Nav.link>
                                    <Nav.link href="/contact">Contact Me</Nav.link>
                                    <Nav.link href="/project">Projects</Nav.link>
                                    <Nav.Link href="/resume">Resume</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </div>

                <Switch>
                    <Route path="/aboutme"><AboutMe /></Route>
                    <Route path="/contact"><Contact></Contact></Route>
                    <Route path="/projects"><Projects></Projects></Route>
                    <Route path="/resume"><Resume /></Route>
                </Switch>
            </body>
        </html>
        ),
};

export default 