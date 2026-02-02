

## Ajuste Mobile-First Responsivo

A página já está funcional, mas vou otimizar para uma experiência **mobile-first** verdadeira.

---

### Mudancas Principais

**1. Tipografia Mobile-First**
- H1: `text-2xl` (mobile) → `md:text-3xl` → `lg:text-5xl`
- Corpo: `text-base` (mobile) → `md:text-lg`
- Títulos de seção: `text-xl` (mobile) → `md:text-2xl`

**2. Espaçamento Mais Compacto no Mobile**
- Hero: `py-16` (mobile) → `md:py-24` → `lg:py-40`
- Seções: `py-12` (mobile) → `md:py-16` → `lg:py-20`
- Padding lateral: `px-5` (mobile) → `md:px-6`

**3. Botão de Play Menor no Mobile**
- `h-12 w-12` (mobile) → `md:h-16 md:w-16`
- Ícone: `h-5 w-5` → `md:h-6 md:w-6`

**4. Botão CTA Responsivo**
- Largura total no mobile: `w-full md:w-auto`
- Altura: `h-11` (mobile) → `md:h-12`

**5. Quebras de Linha Inteligentes**
- Remover `<br />` fixos que quebram no mobile
- Deixar o texto fluir naturalmente em telas pequenas

**6. Listas com Espaçamento Ajustado**
- `space-y-3` (mobile) → `md:space-y-4`

---

### Resumo

A abordagem mobile-first garante que a experiência base seja pensada para celular, com melhorias progressivas para tablets e desktop. O tom sereno e minimalista permanece intacto.

