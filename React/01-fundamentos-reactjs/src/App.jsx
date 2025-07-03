import { Header } from "./components/Header";
import {Post}  from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';

import Styles from './App.module.css';

export function App() {
  return(

  <div>

      <Header />
      
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabriel Ferrarez" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum fuga veritatis saepe aut ullam nemo ratione tempore amet itaque, consequuntur quo! Fugiat soluta ad dolorem dicta qui eveniet quisquam!" 
          />
          <Post 
            author="gabriel Cristiano" 
            content="Um novo post foi adicionado ao blog. Confira!" 
          />
        </main>
      </div>
  </div> 
  
) 
  ;
}


