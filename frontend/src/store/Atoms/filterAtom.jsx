import { atom } from "recoil";

export const filterAtom = atom({
    key: "filterAtom",
    default: "", // Initial search filter is empty
});