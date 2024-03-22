import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get("http://127.0.0.1:8000/categorias/");
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post("http://127.0.0.1:8000/categorias/", categoria);
    return data.results;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`http://127.0.0.1:8000/categorias/${categoria.id}/`, categoria);
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`http://127.0.0.1:8000/categorias/${id}/`);
    return data.results;
  }
}
