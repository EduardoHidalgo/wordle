import { useEffect, useState } from "react";

import { WordleStateContext } from "../contexts/WordleStateContext";
import { useFirstGame } from "../hooks/UseFirstGame";
import { useWordle } from "../hooks/UseWordle";
import { useStatistics } from "../hooks/UseStatistics";
import { InstructionsLayout } from "./modals/Instructions";
import { BoardLayout } from "./Board";
import { HeaderLayout } from "./Header";
import { KeyboardLayout } from "./Keyboard";
import { StatisticsLayout } from "./modals/Statistics";

export const MainLayout = () => {
  const correctAnswer = "panal";

  const [instructionsOpened, setInstructionsOpened] = useState<boolean>(false);
  const [statisticsOpened, setStatisticsOpened] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { statistics, setNewStatistic } = useStatistics();
  const { isFirstGame, setFirstGame } = useFirstGame();
  const {
    answers,
    onClickDel,
    onClickEnter,
    onClickKey,
    solved,
    startNewGame,
  } = useWordle({
    correctAnswer,
  });

  useEffect(() => {
    if (isFirstGame) setInstructionsOpened(true);
  }, [isFirstGame]);

  useEffect(() => {
    if (solved != null) {
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
            open={statisticsOpened}
            solved={solved}
            newGame={newGame}
            statistics={statistics}
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
