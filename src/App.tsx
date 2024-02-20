import { useState } from "react";
import { Header } from "./components/header/header"
import { MainPart } from "./components/main/mainPart";
import { MyModal } from "./components/ui/myModal/myModal";
import './scss/style.scss';

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <div className="mainPart">
      <MyModal isModal={isModal} setIsModal={setIsModal}/>
      <Header setIsModal={setIsModal}/>
      <MainPart/>
    </div>
  )
}

export default App
