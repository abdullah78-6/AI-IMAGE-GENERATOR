import Home from "./pages/home"
import Signup from "./pages/Signup"
const backendurl="http://localhost:9000"
function App() {
return <div>
    <Signup url={backendurl}/>
</div>
}
export default App
