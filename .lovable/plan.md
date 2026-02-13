

## Atualizar Link de Checkout com Repasse de Parametros

### O que muda

**1. URL do checkout**
- De: `https://hotmart.com/seu-curso`
- Para: `https://pay.hotmart.com/L104431597E`

**2. Repasse automatico de parametros da URL**

Criar uma funcao utilitaria que captura todos os parametros presentes na URL atual (ex: `?utm_source=instagram&utm_medium=stories&ref=amigo`) e os repassa automaticamente para o link da Hotmart.

Exemplo: se o visitante acessa `seusite.com/?utm_source=instagram&sck=abc`, o botao vai apontar para `https://pay.hotmart.com/L104431597E?utm_source=instagram&sck=abc`.

Isso permite rastreamento completo de origem do trafego.

---

### Detalhes tecnicos

**Arquivo:** `src/pages/Index.tsx`

- Atualizar `COURSE_URL` para `https://pay.hotmart.com/L104431597E`
- Criar uma funcao `getCheckoutUrl()` que:
  1. Le `window.location.search` para capturar os parametros da URL atual
  2. Concatena esses parametros ao `COURSE_URL`
  3. Preserva parametros que ja existam no link base (neste caso nenhum, mas por seguranca)
- Usar `useMemo` para calcular o link uma vez ao carregar a pagina
- Aplicar o link resultante no `href` do botao

Nenhuma mudanca visual. Nenhuma dependencia nova.

