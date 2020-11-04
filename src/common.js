import axios from "axios"

export default {
  data () {
    return {
      
    }
  },
  methods: {
    async callApi(method, url, dataObj) {
        try {
            return await axios({
              method: method,
              url: url,
              data: dataObj
            });
        } catch (e) {
            console.log(e)
            return e.response
        }
    },
    info (desc, title="Hey") {
        this.$Notice.info({
            title: title,
            desc: desc
        });
    },
    success (desc, title="Success") {
        this.$Notice.success({
            title: title,
            desc: desc
        });
    },
    warning (desc, title="Warning") {
        this.$Notice.warning({
            title: title,
            desc: desc
        });
    },
    error (desc="Some thing went wrong", title="Error") {
        this.$Notice.error({
            title: title,
            desc: desc
        });
    }
  }
}