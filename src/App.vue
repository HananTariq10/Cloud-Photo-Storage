<template>
  <div id="app">
    <header>
      <img alt="App logo" src="./assets/logo.png" height="80" width="100">
      <h1>Cloud Photo Storage</h1>
    </header>
    <main>
      <section>
        <form @submit.prevent="upload">
          <label for="fileInput" class="custom-file-upload">
            <span>Choose a file</span>
            <input id="fileInput" type="file" ref="myfile">
          </label>
          <button type="submit">Upload</button>
        </form>
      </section>
      <section>
        <div v-for="u in url" :key="u" class="image-container">
          <img :src="u" alt="Uploaded Image" height="100" width="100">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { storage } from '../firebase/init.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default {
  name: 'App',
  data() {
    return {
      url: [],
      i: 0,
    }
  },
  methods: {
    async upload() {
      // upload the picture
      const storageRef = ref(storage, `/fod/myfile${this.i}.gif`)
      await uploadBytes(storageRef, this.$refs.myfile.files[0])
        .then(() => {
          console.log('uploaded')
        })

      await getDownloadURL(storageRef)
        .then((purl) => {
          console.log('url is: ', purl)
          this.url.push(purl)
        })

      this.i = this.i + 1
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

header img {
  margin-right: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f2f2f2;
}

.custom-file-upload input {
  display: none;
}

button {
  margin-top: 10px;
  padding: 20px 25px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  margin-top: 20px;
}

</style>
