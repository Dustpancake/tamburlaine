<template>
  <b-container fluid>
    <b-row no-gutters>

      <b-col :cols=navcols style="padding-right: 10px">
        <div class="sticky-top sticky-offset">
          <navbar @resize="resizeview" :content="toc"/>
        </div>
      </b-col>

      <b-col :cols=(12-navcols)>
        <mdrender :content="content"></mdrender>
      </b-col>

    </b-row>
  </b-container>
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

  methods: {
    resizeview(hide) {
      if (hide) {
        this.navcols = 1;
      } else {
        this.navcols = 2;
      }
    }

  },

  data() {
    return {
      content: "*Loading...*",
      toc: "",
      navcols: 3
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
.sticky-offset {
  top: 1px;
}
</style>
