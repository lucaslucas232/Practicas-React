import TarjetaPelicula from "~/components/tarjetaPelicula";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1> PELÍCULAS </h1>
      <main className="app">
        
        <TarjetaPelicula 
        url="https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt/public/2024/01/screen_shot_2024-01-08_at_11.12.14_am_0.jpg" 
        titulo="Fight Club" 
        descripcion="Fight Club is a 1999 American psychological drama film directed by David Fincher and based on the 1996 novel by Chuck Palahniuk. It stars Edward Norton as an unnamed, insomniac white-collar office worker who teams up with a charismatic, reckless soap salesman named Tyler Durden (played by Brad Pitt) to form an underground fight club. The film serves as a dark comedy and a biting critique of Generation X consumerism, corporate culture, and shifting male identity." />
        <TarjetaPelicula 
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NK4l6X2_xyU1yKt36hS4i74wG0IU6DAs-w&s"
         titulo= "Shrek"
         descripcion="Shrek (2001) es una película de comedia y animación que parodia los cuentos de hadas tradicionales.La historia sigue a Shrek, un ogro verde y antisocial que ama la soledad de su pantano. Su vida cambia por completo cuando el malvado Lord Farquaad destierra a todas las criaturas mágicas del reino y las envía a vivir a su propiedad.Para recuperar su tranquilidad, Shrek hace un trato con Farquaad: debe rescatar a la Princesa Fiona de una torre custodiada por una dragona para que el Lord pueda casarse con ella. En su viaje, Shrek es acompañado por Burro, un burro parlanchín e increíblemente pesado pero leal. Sin embargo, el rescate se complica cuando Shrek empieza a enamorarse de la princesa, quien esconde un oscuro secreto."/>
      
      </main>
    </div>
  );
}
