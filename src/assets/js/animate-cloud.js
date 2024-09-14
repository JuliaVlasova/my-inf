export function AnimateCloud() {
  window.onload = function () {
    const cloud = document.getElementById('cloud')
    let newCoord
    const intervalTime = [25000, 30000, 35000, 40000, 45000, 50000]
    const cloudSizes = [0.4, 0.6, 0.8, 1]
    let randomInterval
    let randomSize

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
      if (coord > 20) {
        return coord
      } else {
        coord = 40
        return coord
      }
    }

    function randomYCoord() {
      let coord = Math.floor(Math.random() * 100)
      if (coord >= 10 && coord <= 50) {
        return coord
      } else {
        coord = 20
        return coord
      }
    }

    function randomArrayItem(array) {
      let randomItem = Math.floor(Math.random() * array.length)
      let randomInterval = array[randomItem]
      return randomInterval
    }

    randomInterval = randomArrayItem(intervalTime)

    // Set random settings for each animation interval
    setInterval(function () {
      newCoord = randomXCoord()
      randomSize = randomArrayItem(cloudSizes)
      cloud.style.transform = 'scale(' + randomSize + ')'
      cloud.style.top = randomYCoord() + '%'
    }, randomInterval)

    function goToScreen(progress) {
      cloud.style.right = progress * newCoord + '%' // random right position
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
          }, randomInterval) // random interval from 25000 to 50000
        }, randomInterval) // random interval from 25000 to 50000
      }
    })
  }
}
