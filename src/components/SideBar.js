function SideBar() {
    const data = [
        {image: "./assets/bad.vibes.memes.svg", name: "bad.vibes.memes", reason: "Segue você"},
        {image: "./assets/chibirdart.svg", name: "chibirdart", reason: "Segue você"},
        {image: "./assets/razoesparaacreditar.svg", name: "razoesparaacreditar", reason: "Novo no Instagram"},
        {image: "./assets/adorable_animals.svg", name: "adorable_animals", reason: "Segue você"},
        {image: "./assets/smallcutecats.svg", name: "smallcutecats", reason: "Segue você"}
]
       
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="./assets/catanacomics.svg" alt="" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {data.map(value => <Sugestao image = {value.image} name = {value.name} reason = {value.reason}/>)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt="" />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}
export default SideBar