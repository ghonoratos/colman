import React from "react";

export const Testimonials = () => {
  const testimonials = [
    [
      {
        name: "Fernanda Lopes",
        feedback:
          "O atendimento da Colman foi impecável! Entrei em contato e o retorno foi quase imediato. O Marcos e sua equipe resolveram tudo com muita rapidez e cuidado.",
        rating: 5,
      },
      {
        name: "Eduardo Martins",
        feedback:
          "Profissionais muito competentes. Marcos tirou todas as minhas dúvidas antes do serviço e executou o trabalho com perfeição. Super recomendo!",
        rating: 5,
      },
      {
        name: "Juliana Ferreira",
        feedback:
          "Serviço excelente! A Colman foi super pontual e manteve tudo organizado durante a instalação. Adorei a transparência no atendimento.",
        rating: 4.8,
      },
    ],
    [
      {
        name: "Rafael Costa",
        feedback:
          "Marcos e seus ajudantes foram extremamente profissionais. Chegaram no horário combinado, fizeram um ótimo trabalho e deixaram tudo limpo no final.",
        rating: 5,
      },
      {
        name: "Patrícia Andrade",
        feedback:
          "Tive um problema com vazamento e a Colman resolveu em poucas horas! Fiquei impressionada com a agilidade e a atenção do Marcos. Muito obrigada!",
        rating: 5,
      },
      {
        name: "Thiago Moreira",
        feedback:
          "Excelente empresa! O contato foi fácil, responderam rápido e cumpriram todos os prazos. Profissionais educados e competentes.",
        rating: 4.9,
      },
    ],
    [
      {
        name: "Luciana Barros",
        feedback:
          "Gostei muito do atendimento da Colman. Marcos explicou cada etapa do serviço com paciência e o resultado ficou ótimo. Nota 10!",
        rating: 5,
      },
      {
        name: "André Nascimento",
        feedback:
          "Equipe muito bem treinada e organizada. O serviço de instalação foi feito sem bagunça e dentro do prazo. Recomendo fortemente!",
        rating: 4.7,
      },
      {
        name: "Camila Duarte",
        feedback:
          "Marcos é um verdadeiro profissional! Tirou minhas dúvidas, me orientou sobre o melhor tipo de instalação e executou com excelência. Fiquei muito satisfeita.",
        rating: 5,
      },
    ],
    [
      {
        name: "Bruno Almeida",
        feedback:
          "Fiquei impressionado com a rapidez e o cuidado da equipe. Entraram em contato logo após meu pedido e agendaram a visita para o mesmo dia!",
        rating: 5,
      },
      {
        name: "Helena Ribeiro",
        feedback:
          "A Colman foi super ágil no atendimento e o Marcos é muito atencioso. Deu toda a explicação técnica e deixou o sistema funcionando perfeitamente.",
        rating: 5,
      },
      {
        name: "Gustavo Teixeira",
        feedback:
          "Excelente experiência! Desde o primeiro contato até o fim do serviço, tudo foi feito com profissionalismo e simpatia. Recomendo sem dúvidas.",
        rating: 4.9,
      },
    ],
  ];

  return (
    <section
      id="reviews"
      className="min-h-svh flex flex-col bg-white py-12 scroll-mt-32 snap-mandatory "
    >
      <div className="container flex flex-col flex-1 mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:max-w-[70%] mx-auto fade-in-scroll font-bold mb-6 text-gray-700">
          Veja o que nossos clientes estão falando sobre nós
        </h2>
        <p className="lg:text-lg md:text-xl lg:max-w-[70%] mx-auto fade-in-scroll text-gray-600 mb-8 leading-relaxed">
          Da primeira visita ao último ajuste, entregamos soluções que realmente
          funcionam — e que nossos clientes recomendam.
        </p>

        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonialColumn, index) => (
            <div
              style={
                {
                  "--_fade-in-cover": `${index * 10 + 25}%`,
                } as React.CSSProperties
              }
              key={index}
              className={`grid  md:nth-last-[4n]:hidden xl:nth-last-[4n]:grid fade-in-testimonials translate-y-${Number(
                index * 4
              )} gap-4`}
            >
              {Object.values(testimonialColumn).map((testimonial, idx) => (
                <div
                  key={`${index}-${idx}`}
                  style={
                    {
                      "--_fade-in-cover": `${index * 10 + 30 + idx * 5}%`,
                    } as React.CSSProperties
                  }
                  className="bg-white border-2 fade-in-scroll border-zinc-50 shadow-lg p-6 rounded-lg h-full flex flex-col text-left"
                >
                  <h3 className="text-lg font-bold text-gray-700 mb-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 flex-1">
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-4">
                    <p className="text-lg text-yellow-500">
                      {"★".repeat(Math.floor(testimonial.rating))}
                      {testimonial.rating % 1 !== 0 ? "½" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
