import { createContext, useContext } from "react";
import { ServerError } from "../models/serverError";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStores";

interface Store {
    activityStore: ActivityStore
    commonStore: CommonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
