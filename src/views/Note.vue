<template>
  <b-container fluid>
    <b-row no-gutters>

        <div class="sidebar" :style="{width: navwidth.toString() + 'px'}">
          <sidebar
          @resize="resizeview" :content="toc"/>
        </div>

        <mdrender class="viewer"
          :content="content"
          :style="{'margin-left': navwidth.toString() + 'px'}"
          ></mdrender>

    </b-row>
  </b-container>
</template>

<script>
import mdrender from '@/components/mdrender'
import sidebar from '@/components/sidebar'

import { get_markdown } from '@/services/fileio'

export default {
  components: {
    mdrender,
    sidebar
  },

  props: {
    path: {
      default:""
    }

  },

  methods: {
    resizeview(hide) {
      if (hide) {
        this.navwidth = 100;
      } else {
        this.navwidth = 300;
      }
    }

  },

  data() {
    return {
      content: "*Loading...*",
      toc: "",
      navwidth: 300
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


<style>
.sidebar {
  top: 23px;
  position:fixed;
}

.viewer {
  overflow-x: hidden;
}
</style>
