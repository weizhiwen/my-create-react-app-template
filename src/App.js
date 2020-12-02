import "./App.css";
import React from "react";
import {Button} from "antd";
import axios from "axios";

function App() {
    const handleClick = () => {
        axios.get("/api/aaa").then(res => {
            console.log(res.data);
        })
    }
    return (
        <div>
            <div className="App">
                <Button onClick={handleClick} type="primary">测试Axios</Button>
                <div className="App-text">测试内嵌CSS</div>
            </div>
        </div>
    );
}

export default App;
