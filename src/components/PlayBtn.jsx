import Pause from "@icons/Pause"
import Play from "@icons/Play"
import { useState } from "preact/hooks";

export default function ({ ...Props }) {

  const [paused, setPaused] = useState(false)

  const togglePlay = (e) => {
    if (!paused) document.querySelector("#player").muted = false;
    if (paused) document.querySelector("#player").muted = true;
    setPaused(!paused)
  }

  if (!paused) {
    return <Play {...Props} onClick={togglePlay}></Play>
  } else {
    return <Pause {...Props} onClick={togglePlay}></Pause>
  }
}
