<template>
  <v-container>
    <navbar :content="toc"/>
    <v-main>
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

  data() {
    return {
      content: "*Loading...*",
      toc: "*Loading...*"
    }
  },
  
  mounted() {
    fs.readFile("/Users/cosroe/Developer/Notes/Dust-Notes/nix-sysadmin.md", 'utf-8', (err, data) => {
      var head, toc;
        
      head = data.split("<!--BEGIN TOC-->");
      data = head[1].split("<!--END TOC-->");
      toc = data[0];
      data = head[0] + data[1];

      this.toc = toc;
      this.content = data;
    });
  }

}
</script>
