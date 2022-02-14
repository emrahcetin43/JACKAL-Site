<template>
  <div class="report">
    <form name="bug_report" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="bug_report" />
      <p>
        <label>SCRT Wallet Address:</label>
        <br />
        <input type="text" name="wallet" />
      </p>
      <p>
        <label>Discord Name (Optional):</label>
        <br />
        <input type="text" name="dname" />
      </p>
      <p>
        <label>Alpha Version:</label>
        <br />
        <input type="text" name="version" />
      </p>
      <p>
        <label>Browser Used:</label>
        <br />
        <input type="text" name="browser" />
      </p>
      <p>
        <label>Details of Issue:</label>
        <br />
        <textarea name="desc"></textarea>
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
.report {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  resize: none;
  height: 200px;
  width: 350px;
}
</style>