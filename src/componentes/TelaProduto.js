import useProduto from "../hooks/useProduto";
import "./css/Produto.css"; 
import FormCadProduto from "./FormCadProduto";

const TelaProduto = () => {

  const {
    listaProdutos,
    adicionar_produto,
    excluir_produto,
    exibir_detalhes_produto
  } = useProduto();

  return (
    <>
      <h1 style={{ textAlign: "center" }} tabIndex={1}>
        Meus Produtos
      </h1>

      <div className="box">

        <div id="divMensagem" role="alert" aria-live="assertive"></div>

        <FormCadProduto adicionar_produto={adicionar_produto} />

        {listaProdutos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          listaProdutos.map((produto) => (
            <div
              key={produto.id}
              tabIndex={1}
              className="produto-box"
              style={{ borderLeft: "10px solid blue" }}
              role="group"
              aria-label={`Produto ${produto.nome}`}
            >
              <h1 tabIndex={2}>{produto.nome}</h1>

              <p tabIndex={2}>ID: {produto.id}</p>
              <p tabIndex={2}>Valor: R$ {produto.valor}</p>

              <div className="grid-botoes" role="group" aria-label="ações">
                
                <button
                  className="botao-grid"
                  role="group"
                  aria-label="Excluir produto"
                  tabIndex={2}
                  onClick={() => excluir_produto(produto.id)}
                >
                  Excluir
                </button>

                <button
                  className="botao-grid"
                  tabIndex={2}
                  role="group"
                  aria-label="Exibir detalhes do produto"
                  onClick={() => exibir_detalhes_produto(produto.id)}
                >
                  Exibir Detalhes
                </button>
              </div>

            </div>
          ))
        )}

      </div>
    </>
  );
};

export default TelaProduto;