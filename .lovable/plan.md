
# Plano de Correções

## Problemas Identificados

### 1. Links do WhatsApp incorretos
Todos os botões de WhatsApp do site usam `https://wa.link/vjbxr3`, que direciona para um número errado. O link correto é `https://api.whatsapp.com/send?phone=5511963799408`.

**Arquivos afetados (8 arquivos):**
- `src/components/Hero.tsx` (1 link)
- `src/components/Header.tsx` (2 links)
- `src/components/WhatsAppButton.tsx` (1 link)
- `src/components/Specialties.tsx` (2 links)
- `src/components/Procedures.tsx` (1 link)
- `src/components/Differentials.tsx` (1 link)
- `src/components/FAQ.tsx` (1 link)
- `src/components/Footer.tsx` (2 links)

### 2. Botão "Especialidades" não funciona (desktop e mobile)
O menu do Header aponta para `#especialidades`, mas a seção de Especialidades tem `id="blefaroplastia"`. Por isso o clique não leva a lugar nenhum.

**Correção:** Alterar o `id` da seção em `src/components/Specialties.tsx` de `"blefaroplastia"` para `"especialidades"`.

---

## Detalhes Técnicos

### Alterações por arquivo:

1. **`src/components/Specialties.tsx`** - Trocar `id="blefaroplastia"` por `id="especialidades"`
2. **`src/components/Hero.tsx`** - O botão "Conheça o Procedimento" aponta para `#blefaroplastia`, que passará a não existir mais. Atualizar para `#especialidades`
3. **Todos os 8 arquivos com WhatsApp** - Substituir `https://wa.link/vjbxr3` por `https://api.whatsapp.com/send?phone=5511963799408`

> Nota: Os links de WhatsApp específicos por localidade (São José dos Campos e Bertioga em `Locations.tsx`) usam links diferentes (`wa.link/on0qid` e `wa.link/gii6i8`) e serão mantidos como estão, pois parecem ser números específicos dessas unidades.
