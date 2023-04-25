import { traertienda, } from "./utils";

const render = async () => {
    const data = await traertienda();
    console.log(data);
}

render();