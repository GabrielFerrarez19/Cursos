import { useContext, useEffect } from "react";
import { CountdownContainer, Separetor } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../Context/CyclesContext";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          // setCycles((state) =>
          //   state.map((cycle) => {
          //     if (cycle.id === activeCycleId) {
          //       return { ...cycle, finishedDate: new Date() };
          //     } else {
          //       return cycle;
          //     }
          //   })
          // );

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separetor>:</Separetor>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
