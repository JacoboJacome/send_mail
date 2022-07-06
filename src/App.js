import axios from "axios";

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    const subject = e.target.subject.value;
    const text = e.target.text.value;

    axios
      .post("https://api-send-emails.herokuapp.com/api/v1/sendEmail", {
        from,
        to,
        subject,
        text,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  };



  return (
    <div className="flex flex-wrap h-screen w-screen bg-indigo-900">
      <form
        className="flex flex-col flex-wrap w-full justify-center content-center"
        onSubmit={handleSubmit}
        name="formEmail"
      >
        <input
          className="my-4 p-2 rounded-xl w-1/3"
          type="text"
          name="from"
          id="from"
          placeholder="Remitente"
        ></input>
        <input
          className="my-4 p-2 rounded-xl w-1/3"
          type="email"
          name="to"
          id="to"
          placeholder="Destinatario e-mail"
        ></input>
        <input
          className="my-4 p-2 rounded-xl w-1/3"
          type="text"
          name="subject"
          id="subject"
          placeholder="Asunto"
        ></input>
        <textarea
          className="my-4 p-2 rounded-xl w-1/3 h-1/3 mx-auto"
          type="textarea"
          name="text"
          id="text"
          placeholder="Mensaje"
        ></textarea>
        <input
          className="bg-white w-1/5 mx-auto rounded-2xl hover:bg-indigo-200 font-bold"
          type="submit"
          value="Enviar"
        ></input>
      </form>
    </div>
  );
}

export default App;
