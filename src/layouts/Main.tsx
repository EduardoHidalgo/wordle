import { useEffect, useState } from "react";

import { WordleStateContext } from "../contexts/WordleStateContext";
import { useCountdown } from "../hooks/UseCountdown";
import { useFirstGame } from "../hooks/UseFirstGame";
import { useShouldWait } from "../hooks/UseShouldWait";
import { useStatistics } from "../hooks/UseStatistics";
import { useWordle } from "../hooks/UseWordle";
import { InstructionsLayout } from "./modals/Instructions";
import { StatisticsLayout } from "./modals/Statistics";
import { BoardLayout } from "./Board";
import { HeaderLayout } from "./Header";
import { KeyboardLayout } from "./Keyboard";

export const MainLayout = () => {
  const [instructionsOpened, setInstructionsOpened] = useState<boolean>(false);
  const [statisticsOpened, setStatisticsOpened] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { getParsedCountdown, timeout, resetCountdown } = useCountdown();
  const { statistics, setNewStatistic } = useStatistics();
  const { isFirstGame, setFirstGame } = useFirstGame();
  const { setWait, shouldWait } = useShouldWait();
  const {
    answers,
    correctAnswer,
    onClickDel,
    onClickEnter,
    onClickKey,
    solved,
    startNewGame,
  } = useWordle({});

  useEffect(() => {
    if (isFirstGame) setInstructionsOpened(true);
  }, [isFirstGame]);

  useEffect(() => {
    if (solved !== null) {
      if (timeout == false) setWait(true);

      setNewStatistic(solved);
      setStatisticsOpened(true);
    }
  }, [solved]);

  const closeInstructions = () => {
    setInstructionsOpened(false);
    setFirstGame();
  };

  const openInstructions = () => setInstructionsOpened(true);

  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  const openStatistics = () => setStatisticsOpened(true);

  const closeStatistics = () => setStatisticsOpened(false);

  const newGame = () => {
    startNewGame();
    closeStatistics();
    resetCountdown();
    setWait(false);
  };

  return (
    <div className="w-screen h-screen flex bg-white items-center justify-center">
      <WordleStateContext.Provider
        value={{
          isDarkMode,
        }}
      >
        {instructionsOpened && (
          <InstructionsLayout
            onClickCloseInstructions={closeInstructions}
            open={instructionsOpened}
            setOpen={setInstructionsOpened}
          />
        )}
        {
          <StatisticsLayout
            closeStatistics={closeStatistics}
            correctAnswer={correctAnswer}
            getParsedCountdown={getParsedCountdown}
            newGame={newGame}
            open={statisticsOpened}
            shouldWait={shouldWait}
            solved={solved}
            statistics={statistics}
            timeout={timeout}
          />
        }
        <div className="flex flex-col items-center justify-between max-w-sm min-w-[24rem] h-screen px-4 py-8">
          <HeaderLayout
            isDarkMode={isDarkMode}
            openInstructions={openInstructions}
            toogleDarkMode={toogleDarkMode}
            openStatistics={openStatistics}
          />
          <BoardLayout answers={answers} />
          <KeyboardLayout
            answers={answers}
            onClickDel={onClickDel}
            onClickEnter={onClickEnter}
            onClickKey={onClickKey}
          />
        </div>
      </WordleStateContext.Provider>
    </div>
  );
};
