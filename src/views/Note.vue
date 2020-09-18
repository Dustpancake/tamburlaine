<template>
  <v-container>
    <navbar :content="toc"/>
    <v-main float>
        <mdrender :content="content"></mdrender>
    </v-main>
  </v-container>
</template>

<script>
import mdrender from '@/components/mdrender'
import navbar from '@/components/navbar'

import { get_markdown } from '@/services/fileio'

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
    var cwd = this.$store.state.cwd;
    get_markdown(cwd, this.path).then((result) => {
      this.toc = result.toc;
      this.content = result.content;
    });
  }

}
</script>
