import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Statistics } from "../../types";

export interface StatisticsLayoutProps {
  closeStatistics: () => void;
  correctAnswer: string;
  open: boolean;
  solved: boolean | null;
  newGame: () => void;
  statistics: Statistics;
}

export const StatisticsLayout = ({
  closeStatistics,
  correctAnswer,
  open,
  solved,
  newGame,
  statistics,
}: StatisticsLayoutProps) => {
  const onClick = () => {
    if (solved != null) return newGame();

    closeStatistics();
  };

  return (
    <Modal
      open={open}
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
        {solved != null && (
          <span className="text-center text-base mb-4">
            SIGUIENTE PALABRA EN:{" "}
            <span className="font-semibold">{`00:00`}</span>
          </span>
        )}
        <Button
          label={solved != null ? "JUGAR DE NUEVO" : "CERRAR"}
          onClick={onClick}
        />
      </div>
    </Modal>
  );
};
