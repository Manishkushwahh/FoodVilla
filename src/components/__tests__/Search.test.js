import {render, waitFor, fireEvent} from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {Restraunt_Data} from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(Restraunt_Data)
        }, 
    });
});

test("Shimmer should load On Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>    
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(12);
    // console.log(shimmer);
});

test("Restraunt should load On Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>    
    );

    await waitFor(()=> expect(body.getByTestId("search-btn")))
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(20);
    // console.log(resList);
});

test("Search for string(food) On Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>    
    );

    await waitFor(()=> expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
        target:{
        value: "food",
        },
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(1);
    console.log(resList);
});