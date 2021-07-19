<template>
  <div class="login">
    <div class="">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="login__login-form"
    >
      <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-btn
          color="error"
          class="mr-4"
          @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
          color="warning"
          @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__login-form {
    display: block;
    width: 100%;
    max-width: 500px;
    color: #fff;
   }
}

</style>