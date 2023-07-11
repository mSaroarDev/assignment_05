const Content = () => {
  function createTask() {
    let inputBox = document.querySelector("textarea");
    let quotesArea = document.querySelector(".quotes-area");
    let textValue = document.querySelector(".quotes-area");

    if (inputBox.value === "") {
      alert("Please input something.");
    } else {
      let inputValue = inputBox.value;
      quotesArea.style.display = "block";
      textValue.innerText = inputValue;
      inputBox.value = "";
    }
  }

  return (
    <div className="content">
      <div className="container">
        <textarea id="textarea"></textarea>
        <br />
        <button onClick={createTask}>Submit</button>
        <div className="quotes-area">
          <p id="textarea-value"></p>
        </div>
      </div>
    </div>
  );
};

export default Content;
