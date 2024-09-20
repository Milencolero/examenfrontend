<template>
  <div class="image-container">
    <img src="../components/imagen/paginaenconstruccion.jpg" alt="Página en Construcción" />
  </div>
</template>

<script>
export default {
  name: 'ImageExample'
};
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
}

img {
  max-width: 50%; 
  height: auto; 
}
</style>
