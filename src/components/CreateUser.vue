<template>
    <div>
        <b-container>
            <h1>Formulario creación de usuario</h1>
            <form action class="needs-validation" @submit.prevent="createUser()">
                <div class="form-group row">
                    <label for="validationTooltipFirstName">Primer nombre*:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" max="50" id="validationTooltipFirstName" required
                            placeholder="Primer nombre" v-model="person.personfirstname" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipSecondName">Segundo nombre:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" max="50" id="validationTooltipSecondName"
                            placeholder="Segundo nombre" v-model="person.personsecondname" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipFirstLastName">Primer apellido*:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" max="50" id="validationTooltipFirstLastName" required
                            placeholder="Primer apellido" v-model="person.personlastname" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipSecondLastName">Segundo apellido*:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" max="50" id="validationTooltipSecondLastName" required
                            placeholder="Segundo apellido" v-model="person.personrsecondlastname" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipDocumentNumber">Numero de documento*:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="validationTooltipDocumentNumber" required
                            placeholder="Numero de documento" v-model="person.persondocumentnumber" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipAddress">Dirección*:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" max="50" id="validationTooltipAddress" required
                            placeholder="Dirección" v-model="person.personaddress" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipCellPhone">Numero de contacto*:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="validationTooltipCellPhone" required
                            placeholder="Numero de contacto" v-model="person.personphone" autocomplete="off">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="validationTooltipEmail">Correo electronico*:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="validationTooltipEmail" required
                            placeholder="Correo electronico" max="50" v-model="person.personemail" autocomplete="off">
                        <div class="invalid-tooltip">
                            Ingrese correo electronico por favor.
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">Crear usuario</button>
            </form>
        </b-container>
    </div>
</template>
  
<script>
import serviceApi from "@/services/serviceApi";
export default {
    name: 'CreateUserComponent',
    data() {
        return {
            person: {
                personid: 0,
                personfirstname: '',
                personsecondname: '',
                personlastname: '',
                personrsecondlastname: '',
                personaddress: '',
                personphone: '',
                personemail: '',
                persondocumentnumber: '',
                createdatetime: Date.now()
            },
            token: this.$session.get('token').access
        }
    },
    methods: {
        userLogged() {
            this.$session.remove("token");
            this.$router.push("/");
        },
        async createUser() {
            try {
                await serviceApi.createUser(this.token, this.person)
                this.$alert(
                    `Usuario creado exitosamente.`,
                    "Exitoso",
                    "success"
                ).then(() => this.$router.push("/users"));
            } catch (error) {
                this.$alert(
                    `Error al crear el usuario`,
                    "Advertencia",
                    "warning"
                );
            }
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    font-weight: bold;
}
</style>
  