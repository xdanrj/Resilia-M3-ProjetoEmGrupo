import { useState } from "react";
import axios from "axios";
import Tarefa from "./Tarefa";
import { NovaTarefa } from "./NovaTarefa";

export function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  function getTasks() {
    axios
      .get("https://example-deploy-a-json-server.onrender.com/notas")
      .then((result) => {
        console.log(result);
        //console.log(inputId);
        setTarefas(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <button onClick={getTasks}>Listar todo o JSON</button>

      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa titulo={tarefa.titulo} />
        ))}
      </ul>
    </div>
  );
}
