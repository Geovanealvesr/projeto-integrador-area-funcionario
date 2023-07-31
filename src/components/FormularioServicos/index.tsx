import React, { FC, useState } from "react";
import Button from "../Button";
import { Form, Container } from "./style";

const FormServico: FC = () => {
  const [servicos, setServicos] = useState<string>("Plano 1");
  const [dataContratacao, setDataContratacao] = useState<Date | null>(null);
  const [horarioSugerido, setHorarioSugerido] = useState<string>("10:00");
  const [status, setStatus] = useState<string>("Em andamento");

  const handleServicosChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setServicos(event.target.value);
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataContratacao(new Date(event.target.value));
  };

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHorarioSugerido(event.target.value);
  };

  return (
    <>
      <Container>
        <Form>
          <div>
            <label htmlFor="nome">Nome do cliente</label>
            <input type="text" id="nome" name="nome" />
          </div>

          <div>
            <label htmlFor="servicos">Serviços solicitados</label>
            <select id="servicos" name="servicos" value={servicos} onChange={handleServicosChange}>
              <option value="Plano 1">Plano 1</option>
              <option value="Plano 2">Plano 2</option>
              <option value="Plano 3">Plano 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="dataContratacao">Data de contratação</label>
            <input
              type="date"
              id="dataContratacao"
              name="dataContratacao"
              onChange={handleDataChange}
            />
          </div>

          <div>
            <label htmlFor="horarioSugerido">Horário sugerido</label>
            <input
              type="time"
              id="horarioSugerido"
              name="horarioSugerido"
              value={horarioSugerido}
              onChange={handleHorarioChange}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="status">Status</label>
            <input type="text" id="status" name="status" value={status} readOnly />
          </div>

          <Button text="voltar" />
          <Button text="atender solicitação" />
        </Form>
      </Container>
    </>
  );
};

export default FormServico;
