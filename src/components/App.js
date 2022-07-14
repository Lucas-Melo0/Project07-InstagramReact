import Header from "./Header"
import Content from "./Content";
import SideBar from "./SideBar";
import MobileBar from "./MobileBar";

function App() {
    return (
        <div>
            <Header />
            <div class="corpo">
                <Content />
                <SideBar />
            </div>
            <MobileBar/>
        </div>
    );
}
export default App