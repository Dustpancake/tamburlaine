<template>
  <b-container fluid>
    <b-row justify="center" align="center">

      <b-col style="padding-top: 10px;">
        <b-btn dark @click="viewHome" outlined>
          Home
        </b-btn>
      </b-col>

      <b-col style="padding-top: 10px;">
        <b-btn dark @click="toggleTOC" v-if="showtools" outlined>
          {{hidden ? "Show" : "Hide"}}
        </b-btn>
      </b-col>

    </b-row>

    <b-row>
      <div class="pre-scrollable" style="max-height: 90vh">
        <mdrender :hidden=hidden :content="content"/>
      </div>
    </b-row>

  </b-container>
</template>

<script>
import mdrender from '@/components/mdrender'

export default {
    props: {
      content: {
        default: ""
      }
    },
    components: {
        mdrender
    },
    methods: {
      viewHome() {
        this.$router.push('/')
      },

      toggleTOC() {
        this.hidden = !this.hidden;
        this.$emit("resize", this.hidden);
      },

      format() {
        if (this.content == "") {
          this.showtools = false;
        } else {
          this.showtools = true;
        }
      }
    },

    watch: {
      content: {
        immediate:true,
        handler() {
          this.format();
        }
      }
    },

    data() {
      return {
        hidden: false,
        showtools: true
      }
    }
}

</script>


<style>
@import '../assets/github-md.css';
@import '../assets/prism-mui.css';

.navbar {
  background: rgb(19,26,29) !important;
  background: linear-gradient(90deg, rgba(14,21,24,1) 0%, rgba(10,14,20,1) 100%) !important;
  outline: transparent;
}

a {
  text-decoration: none;
}

</style>
