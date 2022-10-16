<template>
  <div>
    <h1>{{ msg }}</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#user">Usuario:</label>
      <input class="form-input" type="text" id="user" required placeholder="Usuario" autocomplete="off" v-model="user">
      <label class="form-label" for="#password">Contraseña:</label>
      <input class="form-input" type="password" id="password" placeholder="Contraseña" autocomplete="off"
        v-model="password">
      <p v-if="error" class="error">Usuario o contraseña incorrecta.</p>
      <input class="form-submit" type="submit" value="Iniciar sesión">
    </form>
  </div>
</template>

<script>
import auth from "@/services/serviceApi";
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  },
  data: () => ({
    user: "",
    password: "",
    error: false
  }),
  methods: {
    async login() {
      try {
        const response = await auth.login(this.user, this.password);
        this.user = '';
        this.password = '';
        this.$session.set("token", response.data);
        this.$router.push("/Dashboard");
      } catch (error) {
        this.error = true;
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  border-radius: 5px;
  padding: 10px 40px 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: black;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  border-radius: 5px;
  color: rgb(0, 0, 0);
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
