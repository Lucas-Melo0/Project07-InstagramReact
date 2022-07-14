function Content() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story image ="assets/img/9gag.svg" name = "9gag"/>
                <Story image ="assets/img/meowed.svg" name = "meowed"/>
                <Story image ="assets/img/barked.svg" name = "barked"/>
                <Story image ="assets/img/nathanwpylestrangeplanet.svg" name = "nathanwpylestrangeplanet"/>
                <Story image ="assets/img/wawawicomics.svg" name = "wawawicomics"/>
                <Story image ="assets/img/respondeai.svg" name = "respondeai"/>
                <Story image ="assets/img/filomoderna.svg" name = "filomoderna"/>
                <Story image ="assets/img/memeriagourmet.svg" name = "memeriagourmet"/>
                
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src="assets/img/meowed.svg" alt="" />
                            meowed
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src="assets/img/gato-telefone.svg" alt="" />
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
                            <img src="assets/img/respondeai.svg" alt="" />
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src="assets/img/barked.svg" alt="" />
                            barked
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src="assets/img/dog.svg" alt="" />
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
                            <img src="assets/img/adorable_animals.svg" alt="" />
                            <div class="texto">
                                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Content