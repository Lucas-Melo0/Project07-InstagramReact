function Stories() {
    const storiesData = [
        { image: "./assets/9gag.svg", name: "9gag" },
        { image: "./assets/meowed.svg", name: "meowed" },
        { image: "./assets/barked.svg", name: "barked" },
        { image: "./assets/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
        { image: "./assets/wawawicomics.svg", name: "wawawicomics" },
        { image: "./assets/respondeai.svg", name: "respondeai" },
        { image: "./assets/filomoderna.svg", name: "filomoderna" },
        { image: "./assets/memeriagourmet.svg", name: "memeriagourmet" },
    ]
    return (
        <div class="stories">
            {storiesData.map(story => <Story image={story.image} name={story.name} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
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
export default Stories

