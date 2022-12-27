import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Statistics } from "../../types";

export interface StatisticsLayoutProps {
  closeStatistics: () => void;
  correctAnswer: string;
  getParsedCountdown: () => string;
  newGame: () => void;
  open: boolean;
  shouldWait: boolean;
  solved: boolean | null;
  statistics: Statistics;
  timeout: boolean;
}

export const StatisticsLayout = ({
  closeStatistics,
  correctAnswer,
  getParsedCountdown,
  newGame,
  open,
  shouldWait,
  solved,
  statistics,
  timeout,
}: StatisticsLayoutProps) => {
  const onClick = () => {
    if (solved != null || shouldWait) {
      if (timeout) {
        newGame();
        closeStatistics();
      }
    } else closeStatistics();
  };

  return (
    <Modal
      open={open || shouldWait}
      setOpen={() => {
        if (solved == null) closeStatistics();
      }}
    >
      <div className="flex flex-col w-full font-roboto">
        <h1 className="text-center text-2xl font-bold mt-4">Estadísticas</h1>
        <div className="flex flex-row w-full justify-between my-8 px-8">
          <div className="flex flex-col text-center">
            <span className="font-semibold text-3xl">{statistics.played}</span>
            <span>Jugadas</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-semibold text-3xl">{statistics.wins}</span>
            <span>Victorias</span>
          </div>
        </div>
        {solved != null && !solved && (
          <span className="text-center text-base mb-4">
            La palabra era:{" "}
            <span className="font-semibold">
              {`${correctAnswer.toLocaleUpperCase()}`}
            </span>
          </span>
        )}
        {(solved != null || shouldWait) && !timeout && (
          <span className="text-center text-base mb-4">
            SIGUIENTE PALABRA EN:{" "}
            <span className="font-semibold">{getParsedCountdown()}</span>
          </span>
        )}
        <Button
          label={
            solved != null || shouldWait
              ? timeout
                ? "JUGAR DE NUEVO"
                : "ESPERANDO"
              : "CERRAR"
          }
          onClick={onClick}
        />
      </div>
    </Modal>
  );
};
