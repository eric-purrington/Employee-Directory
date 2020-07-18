import axios from "axios";

export default {
  getTwoHundred: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=u");
  }
};