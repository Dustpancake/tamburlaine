<template>
  <nav>
    <v-navigation-drawer app text permanent :width="navwidth" class="navbar">
      <v-container>

        <v-flex>
          <v-row justify="center" align="center" class="ma-0 pa-2">

            <v-col>
              <v-btn dark @click="viewHome" outlined>
                Home
              </v-btn>
            </v-col>

            <v-col>
              <v-btn dark @click="toggleTOC" v-if="showtools" outlined>
                {{hidden ? "Show" : "Hide"}}
              </v-btn>
            </v-col>

          </v-row>
        </v-flex>

        <mdrender :hidden=hidden :content="content"/>
      </v-container>
    </v-navigation-drawer>
  </nav>
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
        if (this.hidden) {
          this.hidden = false;
          this.navwidth = 312;
        } else {
          this.hidden = true;
          this.navwidth = 110;
        }
      },

      format() {
        console.log(this.content);
        if (this.content == "") {
          this.navwidth = 110;
          this.showtools = false;
        } else {
          this.navwidth = 312;
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
        navwidth: 312,
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
