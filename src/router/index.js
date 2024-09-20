import { createWebHistory, createRouter } from "vue-router";
import notas from "@/views/notas.vue"; 
import formulario from "@/views/formulario.vue"; 
import construccion from "@/views/construccion.vue"; 

const routes = [
  {
    path: "/",
    name: "notas",
    component: notas
  },
  
  {
    path: "/notas", // Define la ruta para notas.vue
    name: "notas",
    component: notas
  },
  
  {
    path: "/formulario", 
    name: "formulario",
    component: formulario
  },
  
  {
    path: "/construccion", 
    name: "construccion",
    component: construccion
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

