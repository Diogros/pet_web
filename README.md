# 🐾 PetFlow — Kanban Operacional para Banho e Tosa

> **Sistema Operacional de Fila de Atendimento e Controle de Fluxo para Salões de Estética Pet.**  
> Projeto Integrador de Conclusão da Unidade Curricular 15 (Front-End e CMS) — 2026.

---

## 📌 Sobre o Projeto
O **PetFlow** é uma aplicação web focada na resolução de gargalos operacionais em salões de estética pet (Banho e Tosa). Diferente de sistemas tradicionais de balcão/PDV (que exigem mouse e teclado em cadastros complexos), o PetFlow foi idealizado para ser executado em smartphones e tablets na bancada de trabalho do tosador.

Através de uma interface **Kanban ágil, tátil e ergonômica**, a equipe acompanha em tempo real o tempo de espera e de procedimento de cada animal, avançando etapas com apenas um toque e recebendo alertas visuais de atraso intermitentes em vermelho antes que o tempo limite do serviço expire.

---

## 🚀 Principais Funcionalidades (Requisitos)
* **📝 Cadastro Dinâmico de Fila (`[RF01]`):** Adição rápida de atendimentos informando Tutor, Pet e Serviço (Banho ou Banho e Tosa).
* **📋 Quadro Operacional Kanban (`[RF02]`):** Divisão visual inteligente em 3 colunas de status: *Em Espera*, *Em Atendimento* e *Concluído*.
* **⚡ Avanço Tátil Rápido (`[RF03]`):** Transição de cards entre colunas em apenas um clique/toque, sem necessidade de arrastar elementos (drag-and-drop complexo em telas pequenas).
* **⏱️ Cronômetro Inteligente (`[RF04]`):** Cálculo autônomo e renovação do *timestamp* de permanência do animal ao entrar em cada nova etapa.
* **🚨 Alerta Visual de Atraso (`[RF05]`):** Varredura contínua que aplica animação intermitente em vermelho/rosa caso o cão exceda o tempo ideal na etapa.
* **📱 Ergonomia Mobile-First (`[RNF01]`):** Implementação de *Flexbox Scroll-Snap* horizontal para navegação em carrossel com polegar em smartphones.

---

## 🎨 Identidade Visual e UI/UX
O sistema segue rigorosamente as especificações documentadas no Manual da Marca (`Design.md`), aplicando conceitos de ergonomia visual para longas jornadas no salão:
* **Cores Estruturais:** `Midnight Blue #2c3e50` (Ações e Topo), `Pure White #ffffff` e `Off-White Fog #f4f7f6`.
* **Cores Semânticas (Canal Exclusivo de Status):** 
  * 🟨 `Sunflower #f1c40f` ➔ Em Espera
  * 🟦 `Peter River #3498db` ➔ Em Atendimento
  * 🟩 `Mint Green #2ecc71` ➔ Concluído (Cor isolada exclusivamente para representar sucesso e término)
  * 🟥 `Alizarin Red #e74c3c` ➔ Alerta de Tempo Excedido
* **Tipografia:** `Montserrat` (Bold/ExtraBold para Títulos) e `Inter` (Regular/Medium/Bold para Textos e Cards via Google Fonts).

---

## 🛠️ Arquitetura Técnica & Stack
O projeto foi desenvolvido sob padrões industriais limpos (sem frameworks de UI pesados) para garantir altíssima velocidade e adaptabilidade:
* **Front-End:** HTML5 Semântico, CSS3 (Flexbox, Grid, Keyframes, Scroll-Snap) e JavaScript (ES6+ / jQuery).
* **Integração CMS:** WordPress via Custom Page Template (`page-petflow.php`), integrando-se nativamente às funções `get_header()`, `get_footer()` e `get_template_directory_uri()`.
* **Segurança de Código:** Envelopamento IIFE e delegação de eventos em escopo restrito (`.kanban-board`) para conformidade absoluta com o modo `noConflict` do WordPress.

---

## 📂 Estrutura de Diretórios do Repositório

 pet_web/
├── doc/
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md
