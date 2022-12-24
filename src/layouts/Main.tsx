import { useEffect, useState } from "react";
import { WordleStateContext } from "../contexts/WordleStateContext";
import { BoardLayout } from "./Board";
import { HeaderLayout } from "./Header";
import { KeyboardLayout } from "./Keyboard";
import { InstructionsLayout } from "./modals/Instructions";
import { useFirstGame } from "../hooks/UseFirstGame";
import { useWordle } from "../hooks/UseWordle";

export const MainLayout = () => {
  const [instructionsOpened, setInstructionsOpened] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { isFirstGame, setFirstGame } = useFirstGame();
  const { answers, onClickDel, onClickEnter, onClickKey, solved } = useWordle({
    correctAnswer: "panal",
  });

  useEffect(() => {
    if (isFirstGame) setInstructionsOpened(true);
  }, [isFirstGame]);

  useEffect(() => {
    console.log({ solved });
  }, [solved]);

  const closeInstructions = () => {
    setInstructionsOpened(false);
    setFirstGame();
  };

  const openInstructions = () => setInstructionsOpened(true);

  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  const openStatistics = () => {};

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
