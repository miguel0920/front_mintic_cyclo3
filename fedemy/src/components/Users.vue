<template>
  <div>
    <b-container>
      <b-row align-v="start">
        <b-col>
          <p><b>Ingrese numero de cedula:</b></p>
          <div class="findDocumentNumber">
            <b-form-input v-model="documentNumber" class="form-control-document" type="number"
              placeholder="Numero de cedula"></b-form-input>
            <b-button variant="success" @click="findDocumentNumber()">Consultar</b-button>
          </div>
        </b-col>
        <b-col>
          <b-button variant="success" @click="createUser()">Crear usuario</b-button>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-container>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id Usuario</th>
            <th>Nombre y Apellido</th>
            <th>Numero de cedula</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.personid">
            <td>{{user.personid}}</td>
            <td>{{user.personfirstname}} {{user.personlastname}}</td>
            <td>{{user.persondocumentnumber}}</td>
            <td>{{user.personemail}}</td>
            <td>
              <div style="font-size: 2rem;">
                <b-icon @click="editUser(user.personid)" icon="file-earmark-text-fill"></b-icon>
                <b-icon @click="deleteUser(user.personid, `${user.personfirstname} ${user.personlastname}`)"
                  icon="trash-fill"></b-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>
  
<script>
import serviceUsers from "@/services/serviceApi";
export default {
  name: 'UsersComponent',
  props: {},
  data() {
    return {
      users: [],
      documentNumber: null,
      token: this.$session.get('token').access
    }
  },
  methods: {
    async listUsers() {
      try {
        const response = await serviceUsers.users(this.token);
        this.users = response.data
      } catch (error) {
        console.log(error);
      }
    }, userLogged() {
      this.$session.remove("token");
      this.$router.push("/");
    }, async findDocumentNumber() {
      try {
        const response = await serviceUsers.getpersonByDocumentNumber(this.token, this.documentNumber);
        if (response.data.results.length <= 0) {
          this.$alert(
            `El numero de identificación ${this.documentNumber} no fue encontrado`,
            "Advertencia",
            "warning"
          ).then(() => this.documentNumber = null);
        } else {
          this.$alert(
            `El numero de identificación ${this.documentNumber} fue encontrado`,
            "Exitoso",
            "success"
          ).then(() => this.documentNumber = null);
        }
      } catch (error) {
        console.log("error:", error)
      }
    }, createUser() {
      this.$router.push("/createuser");
    }, editUser(index) {
      this.$router.push(`/updateuser/${index}`)
    }, deleteUser(index, name) {
      this.$confirm(
        `Esta seguro que desea eliminar el usuario ${name}.`,
        "",
        "question"
      )
        .then(async () => {
          try {
            await serviceUsers.deleteUser(this.token, index);
            this.$alert(
              `Usuario eliminado correctamente`,
              "Exitoso",
              "success"
            );
          } catch (error) {
            this.$alert(
              `Error al eliminar el usuario ${name}`,
              "Advertencia",
              "warning"
            );
          }
        })
        .catch(() => {
        });
    }
  },
  mounted() {
    this.listUsers()
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.findDocumentNumber {
  display: flex;
  flex-direction: row;
  padding: 5px;
}

.form-control-document {
  margin-right: 5px;
}

.b-icon.bi {
  cursor: pointer;
}
</style>
  