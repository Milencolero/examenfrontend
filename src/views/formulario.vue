<template>
  <div class="container mt-5">
    <form @submit.prevent="validarFormulario">
      <!-- Nombre -->
       <div class="mb-3 text-center">
        <label for="nombre" class="form-label">Nombre:</label>
        <input v-model="nombre" type="text" class="form-control" id="nombre" placeholder="" required />
      </div>

      <div class="mb-3 text-center">
        <label for="correo" class="form-label">Correo:</label>
        <input v-model="correo" type="email" class="form-control" id="correo" placeholder="" required />
      </div>

        <div class="mb-3 text-center">
        <label for="contrasena" class="form-label">Contraseña:</label>
        <input v-model="contrasena" type="password" class="form-control" id="contrasena" placeholder="" required />
      </div>


         <div class="mb-3 text-center">
        <label for="repetirContrasena" class="form-label">Repetir Contraseña:</label>
        <input v-model="repetirContrasena" type="password" class="form-control" id="repetirContrasena" placeholder="" required />
      </div>

   
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: ''
    };
  },
  methods: {
    validarCorreo(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    validarFormulario() {

      if (!this.nombre) {
        alert('El nombre es obligatorio.');
        return;
      }

      if (!this.validarCorreo(this.correo)) {
        alert('Por favor ingresa un correo válido.');
        return;
      }


      if (this.contrasena !== this.repetirContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      alert('El registro se ha realizado correctamente');
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
