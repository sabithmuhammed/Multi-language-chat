import MessageArea from "./components/MessageArea"
import Sidebar from "./components/Sidebar"

function App() {

  return (
   <div className="w-full h-[100dvh] p-4 flex bg-zinc-800 gap-4">
    <Sidebar />
    <MessageArea />
   </div>
  )
}

export default App
