import { Cards } from "./Components/cards";
import { Header } from "./Components/header";
import { NavBar } from "./Components/navBar";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Header />
        <div className="flex flex-1">
          <NavBar />
          <div className="flex-1 flex flex-wrap justify-center items-start p-4 gap-1">
            <Cards 
              link="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              title="Olhe o mundo, muito a legal slk top, assista agora "
              user="Visite o mundo"
              views={16000}
              date={new Date(2025, 6, 5, 14, 30)}
            />
            <Cards 
              link="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=870&auto=format&fit=crop"
              title="Explore montanhas cobertas de neve"
              user="Nature Gallery"
              views={45231}
              date={new Date(2025, 5, 22, 9, 0)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=870&auto=format&fit=crop"
              title="Pôr do sol na praia dourada"
              user="Sunset Daily"
              views={32100}
              date={new Date(2025, 5, 24, 18, 15)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=870&auto=format&fit=crop"
              title="Aventuras em trilhas de floresta"
              user="Trilha Viva"
              views={18200}
              date={new Date(2025, 6, 1, 14, 45)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=870&auto=format&fit=crop"
              title="Cidades vibrantes ao redor do mundo"
              user="Urban Travel"
              views={93500}
              date={new Date(2025, 5, 30, 11, 20)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=870&auto=format&fit=crop"
              title="Paisagens que parecem pinturas"
              user="Nature Portraits"
              views={21200}
              date={new Date(2025, 6, 6, 17, 45)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1730094485174-e543677a2a24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Minimalismo em ambientes modernos"
              user="Design Clean"
              views={19880}
              date={new Date(2025, 6, 3, 10, 5)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1593642532400-2682810df593?w=870&auto=format&fit=crop"
              title="Tecnologia e produtividade em alta"
              user="TechWorld"
              views={61000}
              date={new Date(2025, 6, 4, 13, 35)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=870&auto=format&fit=crop"
              title="Rotina de estudos e foco nos objetivos"
              user="StudyGram"
              views={15400}
              date={new Date(2025, 6, 5, 8, 10)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=870&auto=format&fit=crop"
              title="Criações artísticas com papel e cor"
              user="Arte Feita à Mão"
              views={12200}
              date={new Date(2025, 6, 5, 17, 50)}
            />

            <Cards 
              link="https://images.unsplash.com/photo-1749520147362-a87d877ca6dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Moda urbana e expressiva"
              user="StreetWearNow"
              views={46800}
              date={new Date(2025, 6, 6, 12, 0)}
            />
            <Cards 
              link="https://plus.unsplash.com/premium_photo-1661681697435-9ab42e9661bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Estilo de vida saudável e equilibrado"
              user="Health Lab"
              views={38900}
              date={new Date(2025, 6, 6, 10, 30)}
            />
          </div>
        </div>
    </div>

  );
}
