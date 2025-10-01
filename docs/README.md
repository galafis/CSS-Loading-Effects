# Diretório de Exemplos

## Efeitos de Carregamento CSS - Exemplos Individuais

Este diretório contém exemplos individuais e demonstrações para cada efeito de carregamento implementado no projeto CSS-Loading-Effects.

### Exemplos Disponíveis

Cada exemplo é um arquivo HTML autônomo que demonstra um efeito de carregamento específico com seu CSS correspondente.

#### 🔄 Efeitos de Spinner
- **Spinner Clássico** - Spinner de borda rotativo básico
- **Spinner Duplo** - Spinner de anel duplo com rotação contrária
- **Carregador de Ondas** - Animação de ondas circulares em expansão

#### 🔵 Animações de Pontos
- **Pontos Saltitantes** - Três pontos com animação de salto escalonada
- **Pontos Pulsantes** - Pontos com efeito de pulsação de escala

#### 📊 Animações de Barras
- **Barras Dançantes** - Barras verticais com escala rítmica
- **Barras Onduladas** - Efeito de movimento de onda horizontal

#### 💧 Efeitos Fluidos
- **Carregamento Pulsante** - Pulso suave de escala e opacidade
- **Carregamento Desvanecente** - Transição suave de opacidade
- **Animação de Onda** - Movimento de onda fluida

#### 📈 Indicadores de Progresso
- **Barra de Progresso** - Progresso animado com gradiente
- **Carregamento Esqueleto** - Efeito de brilho para placeholders de conteúdo

#### 🎯 Elementos Interativos
- **Estados de Carregamento de Botão** - Botões com spinners de carregamento integrados
- **Overlays de Carregamento** - Implementações de carregamento em tela cheia

### Instruções de Uso

1. **Exemplos Individuais**: Cada arquivo pode ser aberto diretamente em um navegador
2. **Copiar e Colar**: Extraia o CSS para qualquer efeito que você precise
3. **Personalização**: Modifique as variáveis CSS para corresponder às cores da sua marca
4. **Integração**: Adicione efeitos aos seus projetos existentes

### Variáveis de Personalização

```css
:root {
  --primary-color: #667eea;    /* Cor principal do efeito */
  --secondary-color: #764ba2;  /* Cor secundária */
  --accent-color: #f093fb;     /* Cor de destaque */
  --animation-duration: 1s;    /* Velocidade da animação */
  --border-radius: 8px;        /* Arredondamento do elemento */
}
```

### Dicas de Desempenho

- ✅ Todas as animações usam `transform` e `opacity` para melhor desempenho
- ✅ Aceleração de hardware ativada via propriedades CSS
- ✅ Manipulação mínima do DOM necessária
- ✅ Design leve e responsivo

### Suporte a Navegadores

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Estrutura de Arquivos

```
examples/
├── README.md              # Esta documentação
├── spinners/
│   ├── classic-spinner.html
│   ├── dual-spinner.html
│   └── ripple-loader.html
├── dots/
│   ├── bouncing-dots.html
│   └── pulsing-dots.html
├── bars/
│   ├── dancing-bars.html
│   └── wave-bars.html
├── effects/
│   ├── pulse-loading.html
│   ├── fade-loading.html
│   └── wave-animation.html
├── progress/
│   ├── progress-bar.html
│   └── skeleton-loading.html
└── interactive/
    ├── button-loading.html
    └── loading-overlay.html
```

### Exemplos de Integração

#### Spinner Básico
```html
<div class="spinner"></div>
```

#### Carregador de Pontos
```html
<div class="dots-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

#### Barra de Progresso
```html
<div class="progress-container">
  <div class="progress-bar"></div>
</div>
```

#### Botão com Carregamento
```html
<button class="btn loading">Carregando...</button>
```

### Contribuindo

Para adicionar novos exemplos:

1. Crie um novo arquivo HTML na pasta de categoria apropriada
2. Inclua o CSS base de `../styles.css`
3. Adicione estilos específicos para seu novo efeito
4. Teste em diferentes navegadores
5. Atualize este README com seu novo exemplo

### Licença

Todos os exemplos são fornecidos sob a Licença MIT - consulte o arquivo [LICENSE](../LICENSE) para obter detalhes.

### Autor

**Gabriel Demetrios Lafis**
- GitHub: [@galafis](https://github.com/galafis)
- Email: gabrieldemetrios@gmail.com

---

⭐ **Dê uma estrela a este projeto** se esses exemplos forem úteis!

🔧 **Precisa de efeitos de carregamento personalizados?** Sinta-se à vontade para abrir uma issue ou contribuir!

📝 **Encontrou um bug?** Por favor, relate-o na seção de issues do repositório principal.

