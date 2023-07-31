import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
import FormServico from "../../components/FormularioServicos";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Servicos() {
  return (
    <>
      <Header />
      <main className="flex">
        <TextoPrincipal
          titulo="Pedido: #1232434566"
          descricao="Detalhes da Soliçitação"
        />
       
      </main>
      <FormServico/>
      <Footer />
    </>
  );
}
