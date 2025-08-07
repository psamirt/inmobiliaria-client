import { Card } from "@/components/ui/card";
import { Award, Home, Target, Users } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
  const stats = [
    { number: "1200+", label: "Propiedades Vendidas", icon: Home },
    { number: "4500+", label: "Propiedades Alquiladas", icon: Users },
    { number: "100+", label: "Clientes Felices", icon: Award },
    { number: "20+", label: "Años de Experiencia", icon: Target },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16  text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Somos{" "}
            <span className="text-primary">Choni Espejo Inmobiliaria</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Llevamos más de 20 años en la industria de bienes raices, ofreciendo
            el mejor servicio en cada una de nuestras transacciones para superar
            las expectativas de nuestros clientes.
          </p>
          <div className="mt-10">
            {/* <h2 className="text-3xl font-bold  mb-6">
              Apostamos más allá de tus expectativas
            </h2> */}
            <p className=" text-lg leading-relaxed mb-6">
              En <span className="text-primary">Choni Espejo Inmobiliaria</span>
            , no solo vendemos propiedades: creamos hogares,
              impulsamos negocios y hacemos realidad tus proyectos. Nuestro
              equipo de profesionales altamente capacitados trabaja
              incansablemente para encontrar la solución perfecta, ya sea una
              vivienda, una oficina, un local comercial o un espacio industrial,
              que se adapte a tu estilo de vida, tus metas y tus necesidades.
            </p>
            {/* <p className=" text-lg leading-relaxed mb-8">
              Fuimos pioneros en el desarrollo de proyectos residenciales
              innovadores y seguimos liderando el mercado con propuestas que
              combinan diseño, funcionalidad y ubicaciones estratégicas.
            </p> */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center  hover:bg-[#f0f4ff] transition-colors shadow-lg rounded-lg flex flex-col items-center justify-center"
              style={{ minHeight: "150px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-real-estate-blue-light rounded-full">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20  text-primary-foreground"></div>

        {/* Choni Espejo Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <Image
              src="/images/choni_espejo.png"
              alt="Choni Espejo - Inmobiliaria"
              className="rounded-lg shadow-elevated w-full"
              width={600}
              height={400}
            />
          </div>

          <div className="text-primary-foreground">
            <h2 className="text-3xl font-bold  mb-6">Choni Espejo</h2>
            <p className=" text-lg leading-relaxed mb-6">
              Soy una profesional inmobiliaria apasionada por ayudar a mis
              clientes a encontrar el lugar perfecto donde vivir. Mi mayor
              satisfacción es poder mantener a mi familia y ser 100%
              independiente a través de mi trabajo. Creo firmemente que la
              tierra no se vende, se compra, y esta filosofía guía cada una de
              mis transacciones.
            </p>
            <p className=" text-lg leading-relaxed mb-6">
              En el sector inmobiliario, especialmente en el segmento A+, he
              identificado que las casas, terrenos, multifamiliares, oficinas,
              centros comerciales, propiedades industriales, casas de playa y
              casas de campo son las opciones que menos se ven afectadas por las
              circunstancias actuales. Mi experiencia me ha enseñado que la
              inversión inmobiliaria sigue siendo una de las mejores opciones,
              especialmente en tiempos de incertidumbre económica.
            </p>
            <p className=" text-lg leading-relaxed mb-8">
              Mi recomendación para las mujeres peruanas es que busquen su
              independencia, desarrollen su espíritu emprendedor y se enfoquen
              en su crecimiento profesional. Cada cliente es único, y me
              enorgullece poder ofrecer un servicio personalizado que va más
              allá de una simple transacción comercial.
            </p>

            <div className="grid sm:grid-cols-2 gap-4  text-primary-foreground">
              <div className="p-4 bg-[#aac2f7]/30 rounded-lg">
                <h3 className="font-semibold  mb-2">Experiencia</h3>
                <p className="text-sm ">
                  Más de 20 años en el sector inmobiliario peruano
                </p>
              </div>
              <div className="p-4 bg-[#aac2f7]/30 rounded-lg">
                <h3 className="font-semibold  mb-2">Especialización</h3>
                <p className="text-sm ">
                  Propiedades de alto valor y segmento A+
                </p>
              </div>
              <div className="p-4 bg-[#aac2f7]/30 rounded-lg">
                <h3 className="font-semibold  mb-2">Filosofía</h3>
                <p className="text-sm ">
                  &ldquo;La tierra no se vende, la tierra se compra&rdquo;
                </p>
              </div>
              <div className="p-4 bg-[#aac2f7]/30 rounded-lg">
                <h3 className="font-semibold mb-2">Compromiso</h3>
                <p className="text-sm">
                  Servicio personalizado y atención al detalle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mt-30 p-8 md:p-12 bg-[#527c62] text-white text-center border-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            En Choni Espejo Inmobiliaria, trabajamos para que cada cliente
            encuentre mucho más que una propiedad: buscamos que vivan una
            experiencia tranquila, segura y llena de confianza. Nos enfocamos en
            entender lo que necesitas, acompañarte en cada paso y ayudarte a
            tomar decisiones con claridad y sin presiones. Nuestro objetivo es
            que termines feliz, sabiendo que encontraste el lugar que necesitas.
          </p>
        </Card>
      </div>
    </section>
  );
}

{
  /* <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="p-4 bg-[#aac2f7]/30 rounded-lg">
                  <h3 className="font-semibold  mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm ">
                    {value.description}
                  </p>
                </div>
              ))}
            </div> */
}

{
  /* <div className="relative">
            <Image
              src="/images/office.jpg"
              alt="Oficina Casa Ideal"
              className="rounded-lg shadow-elevated w-full"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-xs">Años</div>
              </div>
            </div>
          </div> */
}
