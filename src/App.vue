<template>


  <main class="container">
    <aside>
      <h2 class="title">Sobre o profissional</h2>
      <br>
      <p class="sub-title"><strong>Dados do profissional</strong></p>

      <form>

        <br>

        <!--Campo de texto do NOME-->
        <div class="form-nane">
          <label>Nome completo *</label><br>
          <input class="input-name" type="text" v-model="nome" required placeholder="Digite o none completo">
        </div>
        <!--Campo de texto do NOME-->

        <br>
         
         <!--Campo de texto do CPF-->
        <div class="form-cpf">
          <label>CPF *</label><br>
          <input class="input-cpf" type="text" v-model="cpf" required placeholder="Digite um CPF">
        </div>
        <!--Campo de texto do CPF-->

        <br>

        <!--Campo de texto do CELULAR-->
        <div class="form-celular">
          <label>Número de celular *</label><br>
          <input class="input-celular" type="text" v-model="telefone" required placeholder="(00) 0 0000-0000">
        </div>
        <!--Campo de texto do CELULAR-->

        <br>
    
        <!--Campo de texto do ESTADO-->    

            <div class="campo-uf">
            <label>Estado *</label>
            <select name="estado" id="uf">
              <option>Selecione</option>
              <option v-for="estado in estados" :key="estado.id" :value="estado.nome">{{ estado.nome }}</option>
            </select>
          </div>

          <!--Campo de texto do ESTADO-->


          <!--Campo de texto da CIDADE-->

              <div class="campo-uf">
              <label>Cidade *</label>
              <select name="cidade" id="uf">
                <option>Selecione</option>
              </select>
            </div>

          <!--Campo de texto da CIDADE-->

        <br>
        <br>

        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100"> 1 de 2</div>
        </div> <br>
        <router-link to="./components/Page2.vue"><input submit class="btn-next" type="submit" value="PRÓXIMO">
        </router-link>
        <router-view />


      </form>
    </aside>
    <article>
      <img class="image1" src="./assets/img/desktop-pagina-1.png" alt="Imagem 1">
    </article>
  </main>


</template>

<style>
@import './assets/base.css';
</style>

<script>
export default {
  name: "App",
  data: function () {
    return {
      estados: [],
      cidades: []
    }
  },


  methods: {
    getEstados() {
      axios.get('https://api-teste-front-end-fc.herokuapp.com/estados')
        .then(response => {
          this.estados = response.data
        })
    }
  }
}
</script>
