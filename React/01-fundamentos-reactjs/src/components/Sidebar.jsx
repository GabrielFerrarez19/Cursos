import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}> 
            <img 
                src="https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=70&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
                className={styles.cover}
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/GabrielFerrarez19.png"  
                />

                <strong>Gabriel Ferrarez</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}