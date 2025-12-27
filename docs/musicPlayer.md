# Documentação de `musicPlayer.js`

## Visão Geral

A classe `MusicPlayer` fornece uma funcionalidade modular para controlar a reprodução de áudio em seu jogo. Ela abstrai a interação direta com o elemento `<audio>` do HTML, oferecendo métodos simples para tocar, pausar, mutar/desmutar e ajustar o volume da música de fundo. Isso segue o Princípio da Responsabilidade Única, mantendo a lógica de áudio separada do restante da lógica do jogo.

## Classe: `MusicPlayer`

### Construtor

`constructor(audioElementId)`

-   **`audioElementId`**: O `id` do elemento `<audio>` no seu HTML (ex: `"background-music"`).

O construtor inicializa a instância da classe `MusicPlayer`:
-   Obtém a referência ao elemento `<audio>` do DOM usando o `audioElementId` fornecido.
-   Define `this.isMuted` como `false` inicialmente.
-   Se o elemento de áudio for encontrado, define o volume padrão para `0.5` e ativa o `loop` para que a música se repita automaticamente.

### Propriedades

-   `audioElement`: Uma referência ao elemento HTML `<audio>`.
-   `isMuted`: Um booleano que indica se o áudio está atualmente mutado (`true`) ou não (`false`).

### Métodos

#### `play()`

Inicia a reprodução do áudio associado. A música só tocará se o elemento de áudio existir e não estiver mutado. Inclui um `catch` para lidar com possíveis erros de reprodução automática (por exemplo, devido a políticas de navegador que exigem interação do usuário antes de tocar áudio).

#### `pause()`

Pausa a reprodução do áudio atual.

#### `toggleMute()`

Alterna o estado de mudo do áudio.
-   Inverte o valor de `this.isMuted`.
-   Define a propriedade `muted` do elemento de áudio para corresponder a `this.isMuted`.
-   Retorna o novo estado de mudo (`true` se mutado, `false` se desmutado).

#### `setVolume(volume)`

Define o nível de volume do áudio.
-   **`volume`**: Um número entre 0 (mudo) e 1 (volume máximo).

## Como Funciona

O `MusicPlayer` é instanciado em `src/js/script.js` e recebe o ID do seu elemento `<audio>` no HTML. Ele fornece uma interface limpa para controlar a música de fundo do jogo. Por exemplo, o `script.js` conecta um botão de 'mute' (mutar) ao método `toggleMute()` da instância do `MusicPlayer`, permitindo que o usuário ative ou desative a música durante o jogo. A chamada `musicPlayer.play()` é feita em um `window.addEventListener('load')` para tentar iniciar a música assim que a página é carregada, respeitando as políticas de auto-play dos navegadores.
