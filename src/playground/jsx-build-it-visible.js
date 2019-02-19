const app = {
    title: "Visibility Toggle",
    pTag: "",
    buttonStatus: 0
};

const buttonClick = () => {
    (app.buttonStatus === 0) ? app.buttonStatus++ : app.buttonStatus--;
    (app.buttonStatus === 0) ? app.pTag = ""  : app.pTag = "Hey. These are some details you can now see!";
    renderVisibilityToggle();
}

const appRoot = document.getElementById("app");

const renderVisibilityToggle = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={buttonClick} > {(app.buttonStatus === 0) ? "Show details" : "Hide details"} </button>
            <p>{app.pTag}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderVisibilityToggle();