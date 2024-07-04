import React from "react";
import styles from "./css/CriarProduto.css"
import Input from "../components/forms/Input";
import Select from "../components/forms/Select";
import SubmitButton from "../components/forms/SubmitButton"

function CriarProduto() {
  return (
    <div>
      <h1>Adicionar Produto</h1>
      <p>Adicione seu Produto para doá-lo</p>
      <form className={styles.form}>
        <Input 
            type="text" 
            text="Nome do Produto" 
            name="name" 
            placeholder="Nome do projeto"
        />
        <Input
            type="number"
            text="Quantidade de produtos disponiveis para o projeto"
            name="name"
            placeholder="Insira a quantidae de projutos totais"
        />
        <Select
            name="category_id"
            text="Selecione a categoria deste produto"
        />
        <Input
          type="file"
          name="name"
          placeholder="Arquivo"
          text="Coloque uma imagem para ilustrar sua doação"
        />
        <Input
          type="text"
          text="Adicione uma breve descrição do produto"
          name="name" 
          placeholder="Descrição"
        />
        <Input
          type="text"
          text="Adicione a marca do produto ou se não tiver use sua criatividade"
          name="name" 
          placeholder="Marca"
        />
        <SubmitButton/>
      </form>
    </div>
  );
}

export default CriarProduto;
