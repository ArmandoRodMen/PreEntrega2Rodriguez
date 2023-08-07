import logo from "../NavBar/media/logo.svg";

function Home(){

    return (
        <div class="section is-large">
            <div class="box is-primary">
                <h2 class="title is-1 section is-large">¡Bienvenido!</h2> 
                <img src={logo}  width="112" height="28" alt="Logo"/> 
            </div>
        </div>
    )
}


export default Home;