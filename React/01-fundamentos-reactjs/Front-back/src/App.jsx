import { Header } from "./components/Header";
import {Post}  from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import Styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GabrielFerrarez19.png',
      name: 'Gabriel Cristiano Ferrarez',
      role: 'Dev front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-07-02 10:26:59'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ElonMusk.png', // Corrigido o nome (sem espaço)
      name: 'Elon Musk',
      role: 'CEO Spacex'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://jane.design/doctorcare' }, // Incluído https://
    ],
    publishedAt: new Date('2025-07-03 10:26:59'),
  },
];

export function App() {
  return(

  <div>

      <Header />
      
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts =>{
            return (
              <Post 
                key= {posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
  </div> 
  
) 
  ;
}


