import {render} from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>
    );
    
    //Logo
    const logo = header.getAllByTestId("logo");
    // console.log(logo);
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>
    );

    //Online
    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have 0 item on rendering header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>
    );

    //Cart
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart 0 items");
});