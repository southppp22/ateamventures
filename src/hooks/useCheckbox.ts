import React, { useState, useCallback } from "react";

function useCheckbox(initialState: any) {
  const [state, setState] = useState<any>(initialState);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, name, checked } = e.target;

      console.log("el", state[name]);
      const nextState = state[name].map((el: any) => {
        if (el.name === id) return { ...el, status: checked };
        else return el;
      });

      setState({ ...state, [name]: nextState });
    },
    [state]
  );

  const reset = useCallback(() => setState(initialState), [initialState]);

  return { state, changeHandler, reset };
}
export default useCheckbox;
