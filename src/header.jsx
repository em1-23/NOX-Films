function Header(){
    return(
        <div className="header">
            <h2>Nox Films.com</h2>
            <ul style={{display:'flex',gap:'30px',listStyle:'none',alignItems:'center'}}>
                <li><a href="#">Home</a></li>
                <li><a href="https://github.com/em1-23">Profile</a></li>
                <li><a href="https://wa.me/+201027680112">Conatact</a></li>
            </ul>
        </div>
    );
}
export default Header;