import { useEffect, useState } from "react";
import Login from "./components/Login";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user");
        if (userFromLocalStorage) {
            setUser(JSON.parse(userFromLocalStorage));
        }
    }, []);

    const handleUserChange = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };
    return !user ? (
        <div className="w-full h-[100dvh] flex bg-zinc-800 items-center justify-center">
            <Login handleUserChange={handleUserChange} />
        </div>
    ) : (
        <div className="w-full h-[100dvh] p-4 flex bg-zinc-800 gap-4">
            <Sidebar />
            <MessageArea />
        </div>
    );
}

export default App;
