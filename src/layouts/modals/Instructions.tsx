import { Dispatch, SetStateAction } from "react";

import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { WordCard } from "../../components/WordCard";

export interface InstructionsProps {
  onClickCloseInstructions: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const InstructionsLayout = ({
  onClickCloseInstructions,
  open,
  setOpen,
}: InstructionsProps) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex flex-col w-full font-roboto">
        <h1 className="text-center text-2xl font-bold my-4">Cómo jugar</h1>
        <p className="mb-4 text-sm font-medium">
          Adivina la palabra oculta en cinco intentos.
        </p>
        <p className="mb-4 text-sm">
          Cada intento debe ser una palabra válida de 5 letras.
        </p>
        <p className="mb-4 text-sm">
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>
        <span className="mb-4 text-sm font-bold">Ejemplos</span>
        <div className="mb-4">
          <div className="flex flex-row justify-center space-x-2 mb-4">
            <WordCard word="G" type="Correct" />
            <WordCard word="A" />
            <WordCard word="T" />
            <WordCard word="O" />
            <WordCard word="S" />
          </div>
          <div className="text-sm w-full text-center">
            <span>
              La letra <span className="font-bold">G</span> está en la palabra y
              en la posición correcta.
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center space-x-2 mb-4">
            <WordCard word="V" />
            <WordCard word="O" />
            <WordCard word="C" type="Nearly" />
            <WordCard word="A" />
            <WordCard word="L" />
          </div>
          <div className="text-sm w-full text-center">
            <span>
              La letra <span className="font-bold">C</span> está en la palabra
              pero en la posición incorrecta.
            </span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center space-x-2 mb-4">
            <WordCard word="C" type="Correct" />
            <WordCard word="A" />
            <WordCard word="N" />
            <WordCard word="T" />
            <WordCard word="O" type="Wrong" />
          </div>
          <div className="text-sm w-full text-center">
            <span>
              La letra <span className="font-bold">O</span> no está en la
              palabra.
            </span>
          </div>
        </div>
        <p className="mb-2 text-sm">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
        <div className="my-8 text-sm w-full text-center">
          <span>¡Una palabra nueva cada 5 minutos!</span>
        </div>
        <Button label="¡JUGAR!" onClick={onClickCloseInstructions} />
      </div>
    </Modal>
  );
};
