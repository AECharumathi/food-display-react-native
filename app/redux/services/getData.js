import * as base from "../utils/base-service";

const url = " http://localhost:3500/foodItem";

export const getFoodList = () => {

    return base.get(url);
}
