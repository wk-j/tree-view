import * as React from "react";
import * as ReactDOM from "react-dom";

type Props = {

}

class App extends React.Component<Props,{}> { 

    render() {
        return (
            <h1>Hello, world!</h1>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById("app"));