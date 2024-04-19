import "./SignUpPageStyles.css";
function SignUpPage() {
  return (
    <div className="SignUp-form-container">
      <h1>Registration</h1>
      <form>
        <input placeholder="Name" />
        <input type="Email" placeholder="Email" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>

  )
}

export default SignUpPage;