import axios from "axios";

export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const { data } = await axios.get("/editora/");
    return data;
  }
  async adicionarEditora(editora) {
    const { data } = await axios.post("/editora/", editora);
    return data.results;
  }
  async atualizarEditora(editora) {
    const { data } = await axios.put(`/editora/${editora.id}/`, editora);
    return data.results;
  }
  async excluirEditora(id) {
    const { data } = await axios.delete(`/editora/${id}/`);
    return data.results;
  }
}
