# Drive Dream Sales (DDS) — Landing Page WhatsApp VIP

Página de alta conversão para a **Drive Dream Sales**, focada exclusivamente na captação de leads qualificados para a Comunidade VIP no WhatsApp.

## 📌 Progresso Salvo (Resumo Atualizado do Projeto)

1. **Modal Pop-up Interativo de Ofertas Reais (PC & Mobile)**:
   - Ao clicar em qualquer um dos 5 cards de carros (ou no botão `VER OFERTA NO GRUPO ➔`), abre um Modal com efeito glassmorphic blur (`backdrop-filter: blur(12px)`).
   - Carrega dinamicamente a foto real, título, localização e valor do veículo (ex: `R$ 569.990`).
   - Botão dourado de alta conversão **`VER ESTA OFERTA NO WHATSAPP`** direcionando para o grupo VIP.

2. **5 Ofertas Reais com Fotos e Fichas Técnicas Integradas**:
   - **Audi Q8 Blindada (2025)**: 25.000 km · Blindagem Collet · Protechtor EVO X · PPF Full · FIPE R$ 611.747 ➔ **R$ 569.990**.
   - **Range Rover Sport SVR 5.0 V8 (2022)**: 28.000 km · Carbon Edition · Full PPF · FIPE R$ 706.595 ➔ **R$ 499.900**.
   - **BMW X6 M Competition (2022)**: 51.600 km · V8 Bi-Turbo · PPF Frontal · FIPE R$ 687.478 ➔ **R$ 549.900**.
   - **Defender 110x Dynamic HSE (2024)**: 32.000 km · PPF Full Fosco · FIPE R$ 642.000 ➔ **R$ 539.990**.
   - **Volvo XC90 T8 Ult Dark (22/23)**: 111.000 km · Blindada de Fábrica · FIPE s/ blindar R$ 370.000 ➔ **R$ 279.999**.

3. **Seção Hero Dual-Responsiva (PC & Mobile)**:
   - **PC Desktop**: Fundo panorâmico do showroom (`hero_cars_bg.jpg`), títulos centralizados no topo, botão dourado e seta animada de rolagem rebaixados para a área do reflexo do piso de mármore (abaixo dos carros).
   - **Mobile**: Imagem vertical exclusiva (9:16 - `hero_cars_bg_mobile.jpg`), títulos no topo com brasão DDS centralizado ao fundo, pílula/subtítulo ocultados, botão dourado posicionado na reflexão do piso e seta animada dourada de rolagem (`scroll-indicator`).

4. **Reestruturação dos Cards de Benefícios no Mobile**:
   - **Seção 2 (3 Vantagens Exclusivas)**: Grid compacto (2 cards na linha superior + 1 card centralizado abaixo).
   - **Seção 4 (4 Benefícios Exclusivos)**: Grid compacto 2x2 side-by-side.

5. **Carrosséis Deslizantes Otimizados para Celular**:
   - **Ofertas**: Largura de card `78vw` permitindo enxergar a borda da segunda oferta na tela.
   - **Prova Social**: Largura de card `75vw` permitindo visualizar 2 depoimentos simultaneamente na tela com rolagem horizontal ativa para todos os 10 comentários.

6. **Link Oficial do WhatsApp & Favicon**:
   - URL Oficial: `https://chat.whatsapp.com/DXg4VfVJbjhCtqEBcYNHoy`
   - Favicon com o brasão oficial DDS (`assets/official_dds_logo.jpg`).

## 🚀 Como Executar o Servidor Local

Para visualizar a página no navegador:

```bash
python -m http.server 8080
```

Endereço: **`http://localhost:8080/`**
