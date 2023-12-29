import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "123345",
          isModerator: false,
        },
      };
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
      /** You can only return a new object with new state or mutate like above  */
    },
  },
});

export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;
