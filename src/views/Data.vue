<template>
<div>

  <div class="data">

    <v-content>

      <v-container>

        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">


          <input type='file' id='files' prepend-icon='attach_file'/>

        </v-flex>

      </v-container>

    </v-content>

    <v-footer color="indigo" app inset>
      <div style='text-align:center; width:2000px; color: white'>&copy;2018 — </div>
    </v-footer>
  </div>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'data',
  components: {},
  methods: {

    pickFile() {
      console.log(this.$refs);
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()

        fr.readAsDataURL(files[0])

        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })


      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }

  }
}
</script>
