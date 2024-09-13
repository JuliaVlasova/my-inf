export function AnimateCloud() {
  window.onload = function () {
    const cloud = document.getElementById('cloud')
    let newCoord
    let intervalTime = 25000

    function animate({ duration, draw, timing }) {
      let start = performance.now()

      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration

        if (timeFraction > 1) {
          timeFraction = 1
        }

        let progress = timing(timeFraction)

        draw(progress)

        if (timeFraction < 1) {
          requestAnimationFrame(animate)
        }
      })
    }

    function randomXCoord() {
      let coord = Math.floor(Math.random() * 100)
      return coord
    }

    setInterval(function () {
      newCoord = randomXCoord()
    }, intervalTime) // random from 9000 to 30 000

    // Add randomYCoord

    function goToScreen(progress) {
      cloud.style.right = progress * newCoord + '%' // random %
    }

    function darken() {
      cloud.classList.add('darken')
    }

    function rain() {
      cloud.classList.add('rain')
    }

    function disappear() {
      cloud.classList.add('disappear')
    }

    function getOutFromScreen() {
      cloud.classList.add('out-from-screen')
    }

    function clearClasses() {
      cloud.classList.remove('darken')
      cloud.classList.remove('rain')
      cloud.classList.remove('disappear')
      cloud.classList.remove('out-from-screen')
    }

    animate({
      duration: 1000,
      timing: function (timeFraction) {
        return timeFraction
      },
      draw: function (progress) {
        setInterval(function () {
          goToScreen(progress)

          setTimeout(() => {
            darken()
          }, 2000)

          setTimeout(() => {
            rain()
          }, 5000)

          setTimeout(() => {
            disappear()
          }, 7000)

          setTimeout(() => {
            getOutFromScreen()
          }, 8000)

          setTimeout(() => {
            clearClasses()
          }, intervalTime) // random from 9000 to 30 000
        }, intervalTime) // random from 9000 to 30 000
      }
    })
  }
}
