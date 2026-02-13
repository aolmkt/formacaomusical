import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";

const COURSE_URL = "https://pay.hotmart.com/L104431597E";
const VIDEO_URL = "https://seu-dominio.com/video.m3u8"; // Substitua pela URL do seu vídeo
const Index = () => {
  const checkoutUrl = useMemo(() => {
    const currentParams = window.location.search;
    if (!currentParams) return COURSE_URL;
    const base = new URL(COURSE_URL);
    const incoming = new URLSearchParams(currentParams);
    incoming.forEach((value, key) => base.searchParams.set(key, value));
    return base.toString();
  }, []);
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero / Abertura */}
      <section className="px-5 py-16 md:px-6 md:py-24 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-2xl font-medium leading-tight tracking-tight text-foreground md:text-3xl lg:text-5xl">
            Formação musical em casa, com critério e tranquilidade
          </h1>
        </div>
      </section>

      {/* 2. Vídeo do Autor */}
      <section className="px-5 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-2xl">
          <VideoPlayer src={VIDEO_URL} />
        </div>
      </section>

      {/* 3. Texto de Apresentação */}
      <section className="px-5 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mx-auto max-w-xl">
          <div className="space-y-5 font-serif text-base leading-relaxed text-foreground md:space-y-6 md:text-lg">
            <p>Este curso não é sobre proibir música.</p>
            
            <p>
              Ele também não é sobre relativizar tudo, nem sobre dizer que "qualquer coisa serve".
            </p>
            
            <p>
              Este curso existe para pais que querem formar discernimento, não para pais que querem apenas regras prontas.
            </p>
            
            <p>
              Aqui, a música não é tratada como algo neutro, mas também não como uma força automática que age sozinha, independente da família, do ambiente e da educação.
            </p>
            
            <p>
              O que este curso propõe é algo mais exigente — e mais responsável.
            </p>
            
            <p>
              Ele parte do princípio de que a formação dos filhos começa dentro de casa, no clima familiar, no exemplo dos pais, e na capacidade de julgar com serenidade o que entra no cotidiano.
            </p>
            
            <p>
              Por isso, este não é um curso que entrega listas definitivas, nem proibições genéricas, nem respostas prontas para todos os casos.
            </p>
            
            <p className="mt-8">Ele foi feito para pais que desejam:</p>
            
            <ul className="space-y-2 pl-4">
              <li>– menos medo</li>
              <li>– menos paranoia</li>
              <li>– mais critério</li>
              <li>– mais tranquilidade para decidir</li>
            </ul>
            
            <p className="mt-8">
              Se você procura alguém para dizer exatamente o que pode ou não pode ser ouvido, este curso provavelmente não é para você.
            </p>
            
            <p>
              Mas se você quer aprender como julgar, como orientar seus filhos com firmeza e calma, e como formar um gosto musical saudável sem impor, controlar ou terceirizar, então aqui você está em casa.
            </p>
            
            <p className="mt-8">
              A música é o meio. O objetivo é formar pessoas com critério — começando pelos pais.
            </p>
          </div>
        </div>
      </section>

      {/* 4. O Que Você Vai Encontrar */}
      <section className="px-5 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 font-serif text-xl font-medium text-foreground md:mb-8 md:text-2xl">
            O que você vai encontrar ao longo do curso
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-foreground md:space-y-4 md:text-lg">
            <li>– Reflexões claras sobre como a música atua no cotidiano da criança</li>
            <li>– Critérios simples para observar efeitos e contextos</li>
            <li>– Orientação para evitar tanto o exagero quanto a permissividade</li>
            <li>– Caminhos práticos para formar gosto musical em casa, pelo exemplo</li>
          </ul>
        </div>
      </section>

      {/* 5. O Que Este Curso Não É */}
      <section className="bg-muted px-5 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 font-serif text-xl font-medium text-foreground md:mb-8 md:text-2xl">
            O que este curso não é
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-muted-foreground md:space-y-4 md:text-lg">
            <li>– Uma lista de músicas permitidas ou proibidas</li>
            <li>– Um manual técnico de música</li>
            <li>– Um curso para crianças</li>
            <li>– Um discurso ideológico ou militante</li>
          </ul>
        </div>
      </section>

      {/* 6. Acesso */}
      <section className="px-5 py-16 md:px-6 md:py-20 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <Button
            asChild
            size="lg"
            className="h-11 w-full px-10 font-sans text-base font-medium md:h-12 md:w-auto"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Entrar no curso
            </a>
          </Button>
        </div>
      </section>

      {/* 7. Rodapé */}
      <footer className="border-t border-border px-5 py-10 md:px-6 md:py-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm italic text-muted-foreground">
            Este curso foi pensado para pais.
            <br />
            Crianças mudam como consequência.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
