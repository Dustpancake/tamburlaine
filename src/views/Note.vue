<template>
  <v-container>
    <navbar :content="toc"/>
    <v-main xs12 md12 lg12>
        <mdrender :content="content"></mdrender>
    </v-main>
  </v-container>
</template>

<script>
import mdrender from '@/components/mdrender'
import navbar from '@/components/navbar'

const fs = require('fs')

export default {
  components: {
    mdrender,
    navbar
  },

  props: {
    path: {
      default:""
    }

  },

  data() {
    return {
      content: "*Loading...*",
      toc: ""
    }
  },
  
  mounted() {
    console.log(this.path);
    fs.readFile(this.path, 'utf-8', (err, data) => {
      var head, toc;
       
      try { 
        head = data.split("<!--BEGIN TOC-->");
        data = head[1].split("<!--END TOC-->");
        toc = data[0];
        data = head[0] + data[1];
      } catch {
        toc = ""
      }
      this.toc = toc;
      this.content = data;
    });
  }

}
</script>
