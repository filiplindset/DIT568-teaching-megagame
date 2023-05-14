<template>
  <div class="name-and-password">
    <input type="password" v-model="password" placeholder="Enter password" />
    <button class="sign-in-button" @click="signIn">Sign in</button>
  </div>
</template>

<script>
import factionInfo from "@/assets/factions.json";
export default {
  name: "NameAndPassword",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    signIn() {
      // Find the object with the matching ID
      const match = factionInfo.find(obj => obj.id === this.id);

      // Check if the entered password matches the correct password
      if (match && this.password === match.password) {
        this.$emit('pass-correct', this.id);
      } else {
        alert("Incorrect password!");
      }
    }
  }
}
</script>

<style scoped>
.name-and-password {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
}

.sign-in-button {
  background-color: #27929c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  max-width: 6cm;
  transition: background-color 0.3s ease;
}

.sign-in-button:hover {
  background-color: #57b5be;
}
</style>
