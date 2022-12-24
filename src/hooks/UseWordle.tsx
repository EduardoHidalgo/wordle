import { useState } from "react";

import { Answers } from "../types";
import { initialAnswers } from "../types/answers";

interface UseWordleReturn {
  answers: Answers;
}

export const useWordle = (): UseWordleReturn => {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  return { answers };
};
