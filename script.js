// массив с цитатами
const quotes = [
    "Люди забывают, что деревья тоже умеют слушать.",
    "Ты видел, как собака пытается вспомнить своё имя?",
    "На самом деле у тени нет хозяина.",
    "Каждый раз, когда ты моргаешь, вселенная обновляется.",
    "Пауки плетут паутину, чтобы удержать время.",
    "Ложка, которой ты не пользуешься, плачет ночью.",
    "Кто-то изобрёл зеркало, но забыл, зачем оно нужно.",
    "Когда дождь идёт вверх, это значит, что кто-то опаздывает.",
    "Ты только что вдохнул атом, который был частью динозавра.",
    "Если молчать достаточно долго, можно услышать, как мир думает."
  ];
  
  // случайная цитата
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // случайный цвет в формате hex
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  }
  
  // устанавливаем случайный градиент
  function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
  }
  
  // генерация звука
  function generateNoise() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const bufferSize = 2 * audioContext.sampleRate;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
  
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1; // создаём белый шум
    }
  
    const whiteNoise = audioContext.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;
  
    whiteNoise.connect(audioContext.destination);
  
    // стартуем шум
    whiteNoise.start();
  }
  
  // обработка клика
  function handleInteraction() {
    // удаляем обработчик, чтобы шум не стартовал снова
    document.body.removeEventListener("click", handleInteraction);
  
    // меняем градиент
    setRandomGradient();
  
    // вставляем случайную цитату
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = getRandomQuote();
  
    // запускаем шум
    generateNoise();
  }
  
  // ждём пользовательского клика для активации звука
  document.body.addEventListener("click", handleInteraction);
  