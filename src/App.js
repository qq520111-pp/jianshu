import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import routes from "./router/index";
import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

        // change_loading(boo) {
        //     var action = {
        //         type: "change_loading",
        //         value: boo
        //     }
        //     dispatch(action);
        // }
    }

    render() {
        return (
            <Provider store={store}>
                <div className="contain">
                    <HashRouter>
                        {routes.map((item, index) => {
                            var exact = item.exact;
                            return (<Route
                                exact={exact}
                                path={item.path}
                                key={index}
                                component={item.component}
                            >
                            </Route>)
                        })}
                    </HashRouter>
                </div>
            </Provider>
        );
    }
}

export default App;