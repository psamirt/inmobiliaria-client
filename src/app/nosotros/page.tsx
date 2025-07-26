import { Card } from "@/components/ui/card";
import { Award, Home, Target, Users } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
  const stats = [
    { number: "1200+", label: "Propiedades Listadas", icon: Home },
    { number: "4500+", label: "Clientes Felices", icon: Users },
    { number: "100+", label: "Premios Obtenidos", icon: Award },
    { number: "15+", label: "Años de Experiencia", icon: Target },
  ];

  const values = [
    {
      title: "Innovación Constante",
      description:
        "Siempre estamos en busca de la innovación para ofrecer las mejores soluciones inmobiliarias.",
    },
    {
      title: "Confianza y Transparencia",
      description:
        "La base de toda relación es la confianza. Construimos relaciones duraderas con nuestros clientes.",
    },
    {
      title: "Excelencia en Servicio",
      description:
        "Nos comprometemos a superar las expectativas en cada proyecto y transacción.",
    },
    {
      title: "Compromiso Social",
      description:
        "Aportamos a la comunidad y creemos en el potencial de cada persona.",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Somos <span className="text-primary">Casa Ideal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Llevamos más de 15 años en el rubro inmobiliario, ofreciendo valor
            en todos nuestros proyectos para{" "}
            <span className="font-semibold text-primary">
              superar las expectativas
            </span>{" "}
            de nuestros clientes.
          </p>
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Apostamos más allá de tus expectativas
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Casa Ideal, no solo vendemos propiedades, creamos hogares y
              construimos sueños. Nuestro equipo de profesionales altamente
              capacitados trabaja incansablemente para encontrar la solución
              perfecta que se adapte a tu estilo de vida y necesidades.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fuimos pioneros en el desarrollo de proyectos residenciales
              innovadores y seguimos liderando el mercado con propuestas que
              combinan diseño, funcionalidad y ubicaciones estratégicas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#aac2f7]/30 rounded-lg"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/office.jpg"
              alt="Oficina Casa Ideal"
              className="rounded-lg shadow-elevated w-full"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs">Años</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un equipo comprometido con la excelencia, formado por profesionales
            apasionados por el sector inmobiliario y dedicados a brindar el
            mejor servicio.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/team.jpg"
            alt="Equipo Casa Ideal"
            className="rounded-lg shadow-elevated w-full"
            width={1200}
            height={600}
          />
        </div>

        {/* Mission Statement */}
        <Card className="mt-20 p-8 md:p-12 bg-primary text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            Nuestro negocio se basa en relaciones cercanas y estamos contentos
            de poder compartir nuestras experiencias positivas en bienes raíces
            con nuestros clientes. Creemos en la gente y trabajamos para superar
            sus expectativas cada día.
          </p>
        </Card>
      </div>
    </section>
  );
}
