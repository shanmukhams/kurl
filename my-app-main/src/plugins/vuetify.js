import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    
    theme: {
        dark: false,
        themes: {
          light: {
            primary: "#116466",
            secondary: "#2C3531",
            success: "#FFCB9A", 
            error: "#DA7B93",
            warning: "#D1E8E2",
            accent:"#FAFAFA"
          },
          dark: {
            primary: "#116466",
            secondary: "#2C3531",
            success: "#FFCB9A", 
            error: "#DA7B93",
            warning: "#D1E8E2",
          },
        },
      },
});
