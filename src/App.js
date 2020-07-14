import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import store from "./store/index";
import routes from "./router/index";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    render() {
        return (
            <div className="contain" >
                <HashRouter>
                    {routes.map((item, index) => {
                        var exact = item.exact;
                        return (<Route
                            exact={exact}
                            path={item.path}
                            key={index}
                            render={(props) => {
                                return <item.component></item.component>
                            }}
                        >
                        </Route>)
                    })}
                </HashRouter>
            </div>
        );
    }
}

export default App;