export function ArseneLupinSpy() {
  const lupin = document.getElementById("arsene-lupin");
  const dialogQuestion = document.getElementById("dialog-question");
  const dialogButton = document.getElementById("dialog-button");
  const eye = document.querySelectorAll('.a-l-inf__eye');
  let timeout10;
  let timeout20;
  let isCancelled = false;

  function startSpying(eyeballId, containerId) {
    const eyeball = document.getElementById(eyeballId);
    const container = document.getElementById(containerId);

    window.addEventListener('mousemove', (event) => {
      if (!isCancelled) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left; // Позиция курсора по X относительно контейнера
        const y = event.clientY - rect.top; // Позиция курсора по Y относительно контейнера

        // Ограничиваем движение глаза в пределах контейнера
        const eyeballWidth = eyeball.offsetWidth;
        const eyeballHeight = eyeball.offsetHeight;

        let eyeballX = Math.min(Math.max(x - eyeballWidth / 2, 0), rect.width - eyeballWidth);
        let eyeballY = Math.min(Math.max(y - eyeballHeight / 2, 0), rect.height - eyeballHeight);
        if (eyeballX > 1.8) {
          eyeballX = 1.8
        }
        eyeball.style.transform = `translate(${eyeballX}px, ${eyeballY}px)`;
      } else {
        eyeball.style.transform = `none`;
      }
    });
  }

  function resetTimer() {
    // Сбрасываем таймер, если была активность
    clearTimeout(timeout10);
    clearTimeout(timeout20);
    eye.forEach(eye => {
      eye.classList.remove('a-l-inf__eye_fire');
    });

    timeout10 = setTimeout(() => {
      // Действие, если не было активности в течение 10 секунд
      startSpying('eyeball-left', 'eye-left')
      startSpying('eyeball-right', 'eye-right')
    }, 10000);

    timeout20 = setTimeout(() => {
      // Действие, если не было активности в течение 20 секунд
      isCancelled = true;

      eye.forEach(eye => {
        eye.classList.add('a-l-inf__eye_fire');
      });
    }, 20000);
  }

  // Добавляем обработчики событий для отслеживания активности
  dialogQuestion.addEventListener("input", resetTimer);
  dialogQuestion.addEventListener("focus", resetTimer);
  dialogQuestion.addEventListener("keydown", resetTimer);
  dialogQuestion.addEventListener("click", resetTimer);
  dialogButton.addEventListener("click", resetTimer);
  lupin.addEventListener("click", resetTimer);

  // Запускаем таймер при загрузке страницы
  resetTimer();
}
