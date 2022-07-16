import React from "react"
function Posts() {
    const postData = [
        { userImage: "./assets/meowed.svg", userName: "meowed", postImage: "./assets/gato-telefone.svg", lastToLike: "respondeai", LikedNumbers: "101.523"},
        { userImage: "./assets/barked.svg", userName: "barked", postImage: "./assets/dog.svg", lastToLike: "adorable_animals", LikedNumbers: "99.159"},
    ]
    return (
        <div class="posts">
            {postData.map(post => <Post userImage={post.userImage}
                userName={post.userName}
                postImage={post.postImage}
                lastUserToLike={post.lastToLike}
                LikedNumbers={post.LikedNumbers} />)}
        </div>
    )
}

function Post(props) {
    
    const [iconName, setIconName] = React.useState("heart-outline");
    const [likedAmount, setLikedAmount] = React.useState(props.LikedNumbers)

    function likedState(){
        let likedAmountNumber= Number(likedAmount.replaceAll('.', ''))
        

        if (iconName === "heart-outline"){
            likedAmountNumber = likedAmountNumber + 1
            likedAmountNumber = likedAmountNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            setIconName("heart")
            setLikedAmount(likedAmountNumber)
            
        }
        else {
            likedAmountNumber = likedAmountNumber - 1
            likedAmountNumber = likedAmountNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            setIconName("heart-outline")
            setLikedAmount(likedAmountNumber)
        }
        
    }
    
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
                        <ion-icon onClick ={likedState} class= "liked" name={iconName}></ion-icon>
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
                        Curtido por <strong>{props.lastUserToLike}</strong> e <strong>outras {likedAmount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts