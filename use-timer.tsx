const useTimer = (periodInSec: number) => {
  const [timeDistance, setTimeDistance] = useState<number>(periodInSec)

  useEffect(
    () => {
      const dt = new Date()
      dt.setSeconds(dt.getSeconds() + periodInSec)
      const countDownDate = dt.getTime()

      const interval = window.setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now
        const distanceInSec = Math.floor(distance / 1000)

        if (distance < 0) {
          window.clearInterval(interval)
        } else {
          setTimeDistance(distanceInSec)
        }
      }, 1000)

      return () => window.clearInterval(interval)
    },
    [periodInSec],
  )

  return timeDistance
}

