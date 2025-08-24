import Login from "./components/Login";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";
import useAuthStore from "./store/authStore";

function App() {
    const user = useAuthStore((store) => store.user);

    return !user ? (
        <div className="w-full h-[100dvh] flex bg-zinc-800 items-center justify-center">
            <Login />
        </div>
    ) : (
        <div className="w-full h-[100dvh] p-4 flex bg-zinc-800 gap-4">
            <Sidebar />
            <MessageArea />
        </div>
    );
}

export default App;
