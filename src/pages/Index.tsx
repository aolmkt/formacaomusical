import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Configure your external course link here
const COURSE_URL = "https://hotmart.com/seu-curso"; // Substitua pelo link do seu curso

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero / Abertura */}
      <section className="px-6 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Formação musical em casa, com critério e tranquilidade
          </h1>
        </div>
      </section>

      {/* 2. Vídeo do Autor */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded border border-border bg-muted">
            {/* Placeholder para o vídeo - substitua pelo embed real */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
                aria-label="Reproduzir vídeo"
              >
                <Play className="ml-1 h-6 w-6 text-foreground" />
              </button>
            </div>
            {/* Para usar um vídeo real, substitua o div acima por:
            <iframe
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Apresentação do curso"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>
      </section>

      {/* 3. Texto de Apresentação */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground">
            <p>Este curso não é sobre proibir música.</p>
            
            <p>
              Ele também não é sobre relativizar tudo,
              <br />
              nem sobre dizer que "qualquer coisa serve".
            </p>
            
            <p>
              Este curso existe para pais que querem formar discernimento,
              <br />
              não para pais que querem apenas regras prontas.
            </p>
            
            <p>
              Aqui, a música não é tratada como algo neutro,
              <br />
              mas também não como uma força automática que age sozinha,
              <br />
              independente da família, do ambiente e da educação.
            </p>
            
            <p>
              O que este curso propõe é algo mais exigente —
              <br />
              e mais responsável.
            </p>
            
            <p>
              Ele parte do princípio de que a formação dos filhos começa dentro de casa,
              <br />
              no clima familiar,
              <br />
              no exemplo dos pais,
              <br />
              e na capacidade de julgar com serenidade o que entra no cotidiano.
            </p>
            
            <p>
              Por isso, este não é um curso que entrega listas definitivas,
              <br />
              nem proibições genéricas,
              <br />
              nem respostas prontas para todos os casos.
            </p>
            
            <p>Ele foi feito para pais que desejam:</p>
            
            <ul className="space-y-2 pl-4">
              <li>– menos medo</li>
              <li>– menos paranoia</li>
              <li>– mais critério</li>
              <li>– mais tranquilidade para decidir</li>
            </ul>
            
            <p>
              Se você procura alguém para dizer exatamente o que pode ou não pode ser ouvido,
              <br />
              este curso provavelmente não é para você.
            </p>
            
            <p>
              Mas se você quer aprender como julgar,
              <br />
              como orientar seus filhos com firmeza e calma,
              <br />
              e como formar um gosto musical saudável sem impor, controlar ou terceirizar,
              <br />
              então aqui você está em casa.
            </p>
            
            <p>
              A música é o meio.
              <br />
              O objetivo é formar pessoas com critério — começando pelos pais.
            </p>
          </div>
        </div>
      </section>

      {/* 4. O Que Você Vai Encontrar */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-8 font-serif text-2xl font-medium text-foreground">
            O que você vai encontrar
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed text-foreground">
            <li>– Reflexões claras sobre como a música atua no cotidiano da criança</li>
            <li>– Critérios simples para observar efeitos e contextos</li>
            <li>– Orientação para evitar tanto o exagero quanto a permissividade</li>
            <li>– Caminhos práticos para formar gosto musical em casa, pelo exemplo</li>
          </ul>
        </div>
      </section>

      {/* 5. O Que Este Curso Não É */}
      <section className="bg-muted px-6 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-8 font-serif text-2xl font-medium text-foreground">
            O que este curso não é
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <li>– Uma lista de músicas permitidas ou proibidas</li>
            <li>– Um manual técnico de música</li>
            <li>– Um curso para crianças</li>
            <li>– Um discurso ideológico ou militante</li>
          </ul>
        </div>
      </section>

      {/* 6. Acesso */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-10 font-sans text-base font-medium"
          >
            <a href={COURSE_URL} target="_blank" rel="noopener noreferrer">
              Acessar o curso
            </a>
          </Button>
        </div>
      </section>

      {/* 7. Rodapé */}
      <footer className="border-t border-border px-6 py-12">
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
