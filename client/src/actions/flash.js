import { Error_Message_Flashed, Success_Message_Flashed } from './actionType';

export const errorMessageFlash = () => {
  return {
    type: Error_Message_Flashed,
  };
};
export const successMessageFlash = () => {
  return {
    type: Success_Message_Flashed,
  };
};
