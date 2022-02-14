<template>
  <div class="report">
    <div class="directions">
      <p>
        Thank you for participating in our open Alpha! Please use the below form to submit bug reports with as much detail as you can provide.
      </p>
      <p>
        To reduce the volume of tickets, please do not submit a ticket if everything is working, and instead share your feedback and experience with us via <a href="https://twitter.com/JACKAL_DAO">Twitter</a> or <a href="https://discord.gg/5GKym3p6rj">Discord</a>!
      </p>
    </div>
    <form name="bug_report" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="bug_report" />
      <p>
        <label>SCRT Wallet Address:</label>
        <br />
        <input type="text" name="wallet" required />
      </p>
      <p>
        <label>Discord Name (Optional):</label>
        <br />
        <input type="text" name="dname" />
      </p>
      <p>
        <label>Alpha Version:</label>
        <br />
        <input type="text" name="version" required />
      </p>
      <p>
        <label>Browser Used:</label>
        <br />
        <input type="text" name="browser" required />
      </p>
      <p>
        <label>Details of Issue:</label>
        <br />
        <textarea name="desc" required />
      </p>
      <p>
        <button type="submit">Submit Report</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Report",
  methods: {
    handleSubmit() {
      this.$router.push('thanks')
    }
  }
}
</script>

<style scoped>
.directions {
  font-size: 20px;
}
.report {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

textarea {
  resize: none;
  height: 200px;
  width: 350px;
}
:required {
  border: 1px dashed red;
}

</style>