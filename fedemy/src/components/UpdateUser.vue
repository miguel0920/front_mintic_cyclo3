<template>
    <div>
        <b-container>
            <h1>Formulario actualización de usuario</h1>
            <form action class="needs-validation" @submit.prevent="updateUser()">
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
                <button class="btn btn-primary" type="submit">Actualizar usuario</button>
            </form>
        </b-container>
    </div>
</template>
  
<script>
import serviceApi from "@/services/serviceApi";
export default {
    name: 'UpdateUserComponent',
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
            token: this.$session.get('token').access,
            id: null
        }
    },
    methods: {
        userLogged() {
            this.$session.remove("token");
            this.$router.push("/");
        },
        async updateUser() {
            try {
                await serviceApi.updateUser(this.token, this.id, this.person);
                this.$alert(
                    `Usuario actualizado exitosamente.`,
                    "Exitoso",
                    "success"
                ).then(() => this.$router.push("/users"));
            } catch (error) {
                this.$alert(
                    `Error al actualizar el usuario`,
                    "Advertencia",
                    "warning"
                );
            }
        }, async getUserById(){
            try {
                const responsePerson =  await serviceApi.getUserById(this.token, this.id);
                this.person = responsePerson.data.results[0];
            } catch (error) {
                this.$alert(
                    `Error al obtener información del usuario`,
                    "Error",
                    "error"
                ).then(() => this.$router.push("/users"));
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getUserById();
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    font-weight: bold;
}
</style>
  