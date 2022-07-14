
function Content() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story image="./assets/9gag.svg" name="9gag" />
                <Story image="./assets/meowed.svg" name="meowed" />
                <Story image="./assets/barked.svg" name="barked" />
                <Story image="./assets/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet" />
                <Story image="./assets/wawawicomics.svg" name="wawawicomics" />
                <Story image="./assets/respondeai.svg" name="respondeai" />
                <Story image="./assets/filomoderna.svg" name="filomoderna" />
                <Story image="./assets/memeriagourmet.svg" name="memeriagourmet" />
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            <div class="posts">
                <Post userImage = "./assets/meowed.svg" 
                userName = "meowed" 
                postImage = "./assets/gato-telefone.svg" 
                lastUserToLike = "respondeai" 
                LikedNumbers = "101.523" />
                <Post userImage = "./assets/barked.svg" 
                userName = "barked" 
                postImage = "./assets/dog.svg" 
                lastUserToLike = "adorable_animals" 
                LikedNumbers = "99.159" />
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} alt="" />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )

}
function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} alt="" />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} alt="" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="./assets/respondeai.svg" alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.lastUserToLike}</strong> e <strong>outras {props.LikedNumbers} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content