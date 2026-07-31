# DOCUMENTO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS (DADS)

## INTRODUÇÃO
Esta documentação técnica apresenta o **PetFlow**, um sistema web operacional em formato Kanban criado para automatizar o gerenciamento de filas de banho e tosa em pet shops[cite: 4, 5]. Desenvolvido como entrega final da disciplina de Front-End e CMS, o projeto substitui processos manuais por uma interface ágil com monitoramento de tempo em tempo real[cite: 1, 2].

A seguir, são detalhados a jornada do usuário (UX), a identidade visual (UI)[cite: 5], a arquitetura de código preparada para WordPress e a auditoria técnica, que atesta a conformidade de 100% da aplicação com os padrões internacionais da W3C.

---

## 1. IDENTIFICAÇÃO DO PROJETO
* **Nome do Sistema:** PetFlow - Sistema Operacional de Filas para Banho e Tosa (Kanban)[cite: 4, 5]
* **Slogan / Breve Descrição:** Gerenciamento visual, ágil e temporizado de filas de banho e tosa para pet shops[cite: 4, 5].
* **Autor / Desenvolvedor:** Diogo Henrique Rodrigues Barros[cite: 5]
* **Curso / Disciplina:** Projeto Integrador — Front-End e CMS
* **Professor Orientador:** Evandro Vasconcelos
* **Data / Semestre:** Julho de 2026 / Semestre 2026.1[cite: 5]

---

## 2. VISÃO GERAL E CONCEITO (UX)
* **2.1. Problema & Justificativa:** Em pet shops de médio e pequeno porte, há uma constante desorganização no controle de pets. A ausência de monitoramento sobre o tempo em que o animal permanece na espera ou no atendimento gera estresse. O PetFlow resolve essa dor automatizando o fluxo operacional em um quadro Kanban interativo equipado com alertas visuais de estouro de tempo[cite: 2, 3, 4].
* **2.2. Análise de Similares:**

| Sistema Similar | Pontos Fortes | Pontos Fracos / O que o PetFlow melhora |
| :--- | :--- | :--- |
| **Trello** | Visualização em colunas e facilidade de criação de cards. | Não possui temporizador operacional automático com alertas visuais para pet shops. |
| **SimplesVet** | Sistema robusto de gestão clínica e financeira. | Interface complexa para a operação rápida da recepção e do tosador no salão. |
| **PetFlow** | Foco operacional, leve, responsivo e com alertas visuais em tempo real[cite: 2, 3, 5]. | Focado exclusivamente na fila de atendimento, sem sobrecarga de funções financeiras. |

* **2.3. Persona e Cenário de Uso:**
  * **Persona:** Diogo, 28 anos, recepcionista e tosador. Precisa registrar animais rapidamente e acompanhar visualmente o tempo na bancada sem interromper o trabalho.
  * **Cenário de Uso:** O tutor entrega o animal, Diogo acessa o PetFlow, preenche os dados em segundos e o card entra "Em Espera"[cite: 1, 2]. Conforme o serviço avança, o card é movimentado no Kanban.
* **2.4. Fluxo do Usuário (User Flow):**
  1. **Recepção:** Preenchimento do formulário $\rightarrow$ Clique em "Adicionar à Fila"[cite: 1].
  2. **Em Espera:** O card é inserido dinamicamente com carimbo de tempo (*timestamp*)[cite: 2].
  3. **Em Atendimento:** O tosador clica no botão "Avançar ➔" ao iniciar o banho/tosa[cite: 2].
  4. **Concluído:** O botão "Avançar ➔" é acionado novamente, alterando o card para o estado final verde[cite: 2, 3].
  5. **Monitoramento:** Caso o tempo limite seja excedido, o sistema ativa uma animação em vermelho pulsante[cite: 2, 3].

---

## 3. ESPECIFICAÇÃO DE REQUISITOS
* **3.1. Requisitos Funcionais (RF):**
  * `[RF01]` Permitir o cadastro de atendimentos com Nome do Tutor, Nome do Pet e Tipo de Serviço[cite: 1].
  * `[RF02]` Organizar os atendimentos em um quadro Kanban de 3 colunas dinâmicas[cite: 1].
  * `[RF03]` Disponibilizar um botão de transição rápida ("Avançar ➔") para movimentação de estado[cite: 2].
  * `[RF04]` Monitorar o tempo de permanência e aplicar alerta visual ao ultrapassar o limite configurado[cite: 2, 3].
* **3.2. Requisitos Não-Funcionais (RNF):**
  * `[RNF01]` Interface 100% responsiva (Mobile-First) com rolagem horizontal de encaixe (*scroll-snap*).
  * `[RNF02]` Código HTML5 em conformidade com as diretrizes semânticas e acessibilidade da W3C[cite: 1, 4].
  * `[RNF03]` Aplicação operando sem nenhuma exceção ou erro no Console JavaScript.

---

## 4. INTERFACE E DESIGN SYSTEM (UI)
* **4.1. Identidade Visual:** Tipografia estilizada acompanhada do ícone de patinha 🐾 com filtro de inversão para contraste com o cabeçalho escuro[cite: 3, 5].
* **4.2. Paleta de Cores (Hexadecimal)[cite: 5]:**
  * Estrutura: `#2c3e50` (Midnight Blue), `#ffffff` (Pure White), `#f4f7f6` (Off-White Fog) e `#eef2f5` (Soft Gray)[cite: 3, 5].
  * Status Semânticos: `#f1c40f` (Amarelo - Espera), `#3498db` (Azul - Atendimento), `#2ecc71` (Verde - Concluído) e `#e74c3c` (Vermelho - Alerta)[cite: 3, 5].
* **4.3. Tipografia:** Google Fonts — `'Montserrat'` (Títulos) e `'Inter'` (Textos de corpo e botões)[cite: 1, 5].

---

## 5. ARQUITETURA TÉCNICA E CMS
* **5.1. Stack Tecnológico:** HTML5 Semântico, CSS3 (Flexbox, Keyframes)[cite: 1, 3], JavaScript (ES6+) / jQuery (v3.6.0)[cite: 2].
* **5.2. Estrutura de Arquivos do Repositório:**
```text
pet_web/
├── doc/
│   └── DOCUMENTO_TECNICO.md
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── README.md