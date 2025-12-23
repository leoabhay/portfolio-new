"use client"

import { useCallback, useRef } from "react"

type SoundType = "click" | "hover" | "scroll" | "success" | "error" | "whoosh"

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  const playSound = useCallback(
    (type: SoundType, volume = 0.3) => {
      try {
        const audioContext = getAudioContext()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        gainNode.gain.setValueAtTime(volume, audioContext.currentTime)

        switch (type) {
          case "click":
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.1)
            break

          case "hover":
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.05)
            break

          case "scroll":
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime)
            oscillator.frequency.linearRampToValueAtTime(600, audioContext.currentTime + 0.2)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.2)
            break

          case "success":
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime)
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1)
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.4)
            break

          case "error":
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime)
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.2)
            break

          case "whoosh":
            oscillator.type = "sawtooth"
            oscillator.frequency.setValueAtTime(1200, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.3)
            break
        }
      } catch (error) {
        console.log("Audio not supported")
      }
    },
    [getAudioContext],
  )

  return { playSound }
}
