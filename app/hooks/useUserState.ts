import { create } from "zustand";

interface useUserStateProps{
    userName: string | undefined;
    isVerified: boolean | undefined;
    isAdmin: boolean | undefined;
    onSetUserName: (data:string | undefined) => void;
    onSetVerified: (data: boolean | undefined) => void;
    onSetIsAdmin: (data: boolean | undefined) => void;

}

const useUserState = create<useUserStateProps>((set) => ({
    userName: "",
    isVerified: false,
    isAdmin: false,
    onSetUserName: (userName: string | undefined) => set({userName: userName}),
    onSetVerified: (isVerified: boolean | undefined) => set({isVerified: isVerified}),
    onSetIsAdmin: (isAdmin: boolean | undefined) => set({isAdmin: isAdmin})
}))

export default useUserState;