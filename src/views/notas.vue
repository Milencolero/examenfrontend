<template>
  <div class="container mt-5 d-flex flex-column align-items-center">
    <form @submit.prevent="calcularAprobacion" class="w-100">
        

      <div class="mb-3 text-center">
        <label for="nota1" class="form-label">Nota 1</label>
        <input v-model.number="nota1" type="number" class="form-control w-100 mx-auto" id="nota1" placeholder="Nota 1" required min="10" max="70" />
      </div>
      <div class="mb-3 text-center">
        <label for="nota2" class="form-label">Nota 2</label>
        <input v-model.number="nota2" type="number" class="form-control w-100 mx-auto" id="nota2" placeholder="Nota 2" required min="10" max="70" />
      </div>
      <div class="mb-3 text-center">
        <label for="nota3" class="form-label">Nota 3</label>
        <input v-model.number="nota3" type="number" class="form-control w-100 mx-auto" id="nota3" placeholder="Nota 3" required min="10" max="70" />
      </div>
      <div class="mb-3 text-center">
        <label for="asistencia" class="form-label">Asistencia %</label>
        <input v-model.number="asistencia" type="number" class="form-control w-100 mx-auto" id="asistencia" placeholder="Asistencia" required min="0" max="100" />
      </div>


      <div class="text-center">
        <button type="submit" class="btn btn-primary">Calcular</button>
      </div>
    </form>


    <div v-if="resultado !== null" class="mt-3 text-center">
      <h3 v-html="resultado"></h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: null
    };
  },
  methods: {
    calcularAprobacion() {

      const pesoNota1 = 0.35;
      const pesoNota2 = 0.35;
      const pesoNota3 = 0.30;

      const promedio = this.nota1 * pesoNota1 + this.nota2 * pesoNota2 + this.nota3 * pesoNota3;

      if (this.asistencia >= 80 && promedio >= 40) {
        this.resultado = `Tu promedio es: ${promedio.toFixed(2)}<br>Tu estado es: Aprobado`;
      } else {
        this.resultado = `Tu promedio es: ${promedio.toFixed(2)}<br>Tu estado es: Reprobado`;
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 500px;
  margin: 0 auto;
}
</style>
        